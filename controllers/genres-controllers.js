const Genre = require("../models/genre-model");
const HttpError = require("../models/http-error");

const getAllGenres = async (req, res, next) => {
  let genres;
  try {
    genres = await Genre.find({});
  } catch (err) {
    return next(new HttpError("Fetching genres failed.", 500));
  }
  res.json({ genres });
};

const getGenreByName = async (req, res, next) => {
  const genreName = req.params.name; 
  let genre;
  try {
    genre = await Genre.findOne({ name: genreName });
  } catch (err) {
    return next(new HttpError("Fetching genre failed.", 500));
  }

  if (!genre) {
    return next(new HttpError("Genre not found.", 404));
  }

  res.json({ genre: genre.toObject({ getters: true }) });
};


const createGenre = async (req, res, next) => {
  const { name, description } = req.body;

  if (!name || name.trim() === "") {
    return next(new HttpError("Invalid input: name is required.", 400));
  }

  const newGenre = new Genre({ name, description });

  try {
    await newGenre.save();
  } catch (err) {
    return next(new HttpError("Creating genre failed, please try again.", 500));
  }

  res.status(201).json({ genre: newGenre.toObject({ getters: true }) });
};

const updateGenre = async (req, res, next) => {
  const genreName = req.params.name;
  const { name, description } = req.body;

  if (!name || name.trim() === "") {
    return next(new HttpError("Invalid input: name is required.", 400));
  }

  let genre;
  try {
    genre = await Genre.findOne({ name: genreName });
  } catch (err) {
    return next(new HttpError("Could not update genre, please try again.", 500));
  }

  if (!genre) {
    return next(new HttpError("Genre not found.", 404));
  }

  genre.name = name;
  genre.description = description;

  try {
    await genre.save();
  } catch (err) {
    return next(new HttpError("Updating genre failed, please try again.", 500));
  }

  res.status(200).json({ genre: genre.toObject({ getters: true }) });
};

const deleteGenre = async (req, res, next) => {
  const genreName = req.params.name;

  let genre;
  try {
    genre = await Genre.findOne({ name: genreName });
  } catch (err) {
    return next(new HttpError("Could not delete genre, please try again.", 500));
  }

  if (!genre) {
    return next(new HttpError("Genre not found.", 404));
  }

  try {
    await genre.deleteOne();
  } catch (err) {
    return next(new HttpError("Deleting genre failed, please try again.", 500));
  }

  res.status(200).json({ message: "Deleted genre." });
};

exports.getAllGenres = getAllGenres;
exports.getGenreByName = getGenreByName;
exports.createGenre = createGenre;
exports.updateGenre = updateGenre;
exports.deleteGenre = deleteGenre;
