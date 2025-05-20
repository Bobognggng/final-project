const { Schema, model, Types } = require("mongoose");

const clubSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  members: [{ type: String, required: true }],
  discussionThreads: [
    {
      title: { type: String, required: true },
      messages: [{ type: String, required: true }]
    }
  ],
  monthlyPick: { type: Types.ObjectId, ref: "Movie" }
});

module.exports = model("Club", clubSchema);
