const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  web: String,
});

module.exports = mongoose.model("Author", authorSchema);
