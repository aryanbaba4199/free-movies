const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  imdbRating: {
    type: String,
  },
  releaseDate: {
    type: String,
  },
  downloadUri: {
    type: String,
    required: true,
  },
  scUrl: {
    type: [String],
    default: [],
  },
  category: {
    type: String,
  },
  quality: {
    type: String,
  },
  sizes: {
    '480P': {
      downloadUri: {
        type: String,
      },
    },
    '720P': {
      downloadUri: {
        type: String,
      },
    },
    '1080P': {
      downloadUri: {
        type: String,
      },
    },
    '4K': {
      downloadUri: {
        type: String,
      },
    },
  },
});

module.exports =
  mongoose.models.Movies || mongoose.model("Movies", moviesSchema);
