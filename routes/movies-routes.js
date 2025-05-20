const express = require("express");
const router = express.Router();
const moviesControllers = require("../controllers/movies-controllers");

router.get("/", moviesControllers.getAllMovies);

router.get("/genre/:genre", moviesControllers.getMoviesByGenre);

router.get("/:title", moviesControllers.getMovieByTitle);

router.post("/", moviesControllers.createMovie);

router.patch("/title/:title", moviesControllers.updateMovie);

router.delete("/title/:title", moviesControllers.deleteMovie);

module.exports = router; 