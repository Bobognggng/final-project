const { faker } = require("@faker-js/faker");
const HttpError = require("../models/http-error");

const Movie = require("../models/movie-model");
const { default: mongoose } = require("mongoose");


//get movie by title
const getMovieByTitle = async (req, res, next) => {
  try {
    const movie = await Movie.findOne({ title: req.params.title });
    if (!movie) {
      return next(new HttpError("Movie not found.", 404));
    }
    res.json({ movie: movie.toObject({ getters: true }) });
  } catch (err) {
    return next(new HttpError("Something went wrong.", 500));
  }
};

//get Movies By Genre
const getMoviesByGenre = async (req, res, next) => {
  const genreName = req.params.genre;
  let movies;
  try {
    movies = await Movie.find({
      genre: { $regex: new RegExp(`^${genreName}$`, "i") }
    });
  } catch (err) {
    return next(new HttpError("Something went wrong.", 500));
  }
  if (!movies || movies.length === 0) {
    return next(new HttpError("No movies found for this genre.", 404));
  }
  res.json({ movies: movies.map(m => m.toObject({ getters: true })) });
};

// getAllmovies
const getAllMovies = async (req, res, next) => {
  let movies;
  try {
    movies = await Movie.find().exec();
  } catch (err) {
    return next(new HttpError("Something went wrong.", 500));
  }

  if (!movies || movies.length === 0) {
    return next(new HttpError("No movies found.", 404));
  }

  res.json({
    movies: movies.map((movie) => movie.toObject({ getters: true })),
  });
};


// create movie
const createMovie = async (req, res, next) => {
  const {
    title,
    description,
    genre,
    releaseYear,
    director,
    cast,
    averageRating,
    posterUrl
  } = req.body;

  const newMovie = new Movie({
    title,
    description,
    genre,
    releaseYear,
    director,
    cast,
    averageRating,
    posterUrl, 
  });

  try {
    await newMovie.save();
  } catch (err) {
    console.error("CreateMovie error:", err);
    return next(new HttpError("Something went wrong.", 500));
  }

  res.status(201).json({ movie: newMovie.toObject({ getters: true }) });
};

// update movie
const updateMovie = async (req, res, next) => {
  const { title, description } = req.body;

  let movie;
  try {
    movie = await Movie.findOne({ title: req.params.mid }); 
    if (!movie) {
      return next(new HttpError("Movie not found.", 404));
    }
    movie.title = title;
    movie.description = description;
    await movie.save();
  } catch (err) {
    return next(new HttpError("Updating movie failed.", 500));
  }

  res.status(200).json({ movie: movie.toObject({ getters: true }) });
};

//delete Movie
const deleteMovie = async (req, res, next) => {
  let movie;
  try {
    movie = await Movie.findOne({ title: req.params.mid });
    if (!movie) {
      return next(new HttpError("Movie not found.", 404));
    }
  } catch (err) {
    return next(new HttpError("Could not find movie.", 500));
  }

  try {
    await movie.deleteOne();
  } catch (err) {
    return next(new HttpError("Could not delete movie.", 500));
  }

  res.status(200).json({ message: "Deleted movie." });
};


exports.getMovieByTitle = getMovieByTitle;
exports.getMoviesByGenre = getMoviesByGenre;
exports.getAllMovies = getAllMovies;
exports.createMovie = createMovie;
exports.updateMovie = updateMovie;
exports.deleteMovie = deleteMovie;