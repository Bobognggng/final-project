const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exists"],
  },
  password: { type: String, required: true, minlength: 6 },
  imageUlr: { type: String, required: true },
  places: [{ type: Types.ObjectId, required: true, ref: "Place" }],
});
module.exports = model("User", userSchema);
