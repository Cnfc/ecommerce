const express = require("express");
const router = express.Router();

// const {
//   Movies,
//   // validate
// } = require("../model/modelMoovies");

const { read, createMovie } = require("../controllers/movies");

router.get("/movies", read);
router.post("/movies", createMovie);

// router.get("/m",read);

module.exports = router;
