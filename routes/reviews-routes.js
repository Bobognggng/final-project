const express = require('express');
const router = express.Router();
const reviewsController = require("../controllers/reviews-controllers");

router.post('/', reviewsController.createReview);

router.get('/title', reviewsController.getReviewsByMovieTitle);

router.get('/', reviewsController.getAllReviews);

router.delete('/:id', reviewsController.deleteReview);

module.exports = router;
