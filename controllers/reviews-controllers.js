const { faker } = require("@faker-js/faker");
const HttpError = require("../models/http-error");

const Review = require("../models/review-model");
const Movie = require("../models/movie-model");
const { default: mongoose } = require("mongoose");

// Create Review
const createReview = async (req, res, next) => {
  const { moviename, username, rating, comment } = req.body;

  const newReview = new Review({
    moviename,
    username,
    rating,
    comment,
  });

  try {
    await newReview.save();
  } catch (err) {
    console.error("CreateReview error:", err);
    return next(new HttpError("Creating review failed.", 500));
  }

  res.status(201).json({ review: newReview.toObject({ getters: true }) });
};

// Get reviews by movie title
const getReviewsByMovieTitle = async (req, res, next) => {
  const title = req.query.title;

  if (!title) {
    return next(new HttpError("Movie title is required as a query parameter.", 400));
  }

  let movie;
  try {
    movie = await Movie.findOne({ title });
  } catch (err) {
    return next(new HttpError("Error finding movie by title.", 500));
  }

  if (!movie) {
    return next(new HttpError("Movie not found", 404));
  }

  let reviews;
  try {
    reviews = await Review.find({ moviename: movie._id }).sort({ createdAt: -1 });
  } catch (err) {
    return next(new HttpError("Fetching reviews failed.", 500));
  }

  res.json({ reviews: reviews.map(r => r.toObject({ getters: true })) });
};

// Get all reviews
const getAllReviews = async (req, res, next) => {
  let reviews;
  try {
    reviews = await Review.find().sort({ createdAt: -1 });
  } catch (err) {
    return next(new HttpError("Fetching reviews failed.", 500));
  }

  if (!reviews || reviews.length === 0) {
    return next(new HttpError("No reviews found.", 404));
  }

  res.json({ reviews: reviews.map((r) => r.toObject({ getters: true })) });
};

//update review
const updateReview = async (req, res, next) => {
  const reviewId = req.params.id;
  const { rating, comment } = req.body;

  let review;
  try {
    review = await Review.findById(reviewId);
  } catch (err) {
    return next(new HttpError("Fetching review failed.", 500));
  }

  if (!review) {
    return next(new HttpError("Review not found.", 404));
  }

  if (rating !== undefined) review.rating = rating;
  if (comment !== undefined) review.comment = comment;

  try {
    await review.save();
  } catch (err) {
    return next(new HttpError("Updating review failed.", 500));
  }

  res.status(200).json({ review: review.toObject({ getters: true }) });
};

//delete reviews
const deleteReview = async (req, res, next) => {
  const reviewId = req.params.id;

  let review;
  try {
    review = await Review.findById(reviewId);
  } catch (err) {
    return next(new HttpError("Fetching review failed.", 500));
  }

  if (!review) {
    return next(new HttpError("Review not found.", 404));
  }

  try {
    await review.deleteOne();
  } catch (err) {
    return next(new HttpError("Deleting review failed.", 500));
  }

  res.status(200).json({ message: "Review deleted successfully." });
};

exports.createReview = createReview;
exports.getReviewsByMovieTitle = getReviewsByMovieTitle;
exports.getAllReviews = getAllReviews;
exports.deleteReview = deleteReview;