const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  actors: [{ type: String }],
  director: { type: String },
  runtime: { type: Number },
});

module.exports = mongoose.model("Movie", movieSchema);
