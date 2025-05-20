const { Schema, model, Types } = require("mongoose");

const reviewSchema = new Schema({
  moviename: { type: Types.ObjectId, ref: "Movie", required: true },
  username: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = model("Review", reviewSchema);
