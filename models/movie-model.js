const { Schema, model, Types } = require("mongoose");

const movieSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  director: { type: String, required: true },
  cast: [{ type: String, required: true }],
  averageRating: { type: Number, required: true },
  posterUrl: { type: String, required: true },
});

module.exports = model("Movie", movieSchema);
