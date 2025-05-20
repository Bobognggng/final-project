const { Schema, model } = require("mongoose");

const genreSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String }, 
});

module.exports = model("Genre", genreSchema);
