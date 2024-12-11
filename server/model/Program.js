const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  audioUrl: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const ProgramSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    required: true,
  },
  tracks: [TrackSchema],
});

module.exports = mongoose.model("Program", ProgramSchema);
