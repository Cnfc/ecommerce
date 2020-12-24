const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Authore",
  },
});

module.exports = mongoose.model("Course", courseSchema);
