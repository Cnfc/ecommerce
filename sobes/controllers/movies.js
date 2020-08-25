const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

const Movies = require("../model/modelMoovies");
const { Genre } = require("../model/modelGenres");

exports.read = async (req, res) => {
  console.log("Authenticating...");
  const movies = await Movies.find().sort("title genre");

  console.log(movies.length);
  res.send({
    length: movies.length,
    data: movies,
  });
};

exports.createMovie = async (req, res) => {
  // const {error} = validate(req.body);
  // if (err) return res.status(400).send(error.details[0].message);

  const genres = await Genre.findById(req.body.genreId);
  if (!genres) return res.status(400).send("Invalid genre");
  console.log(genres);

  let movie = new Movies({
    title: req.body.title,
    genres: genres,
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
  });

  console.log(movie);
  movie = await movie.save();
  res.send(movie);
};
