const mongoose = require("mongoose");
const { genreSchema } = require("./modelGenres");

const moviesSchema = new mongoose.Schema({
  title: String,
  genre: {
    type: genreSchema,
    // required: true,
  },
  numberInStock: Number,
  dailyRentalRate: Number,
});

module.exports = mongoose.model("Movies", moviesSchema);
