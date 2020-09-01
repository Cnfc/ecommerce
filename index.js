const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const helmet = require("helmet");
const config = require("config");
const debug = require("debug")("app:startup");
const cors = require("cors");

require("dotenv").config();

const Movies = require("./sobes/model/modelMoovies");
const Genres = require("./sobes/model/modelGenres");

const movies = require("./sobes/routers/movies");
const tasks = require("./sobes/routers/tasks");
// APP
const app = express();
// =============================================

// DB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  });

// =============================================

app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(helmet());
app.use(cors());

// ROUTES
// app.use("/api", authRoutes);
// app.use("/api", userRoutes);
// app.use("/api", categoryRoutes);
// app.use("/api", productRoutes);

app.use("/api", movies);
app.use("/api", tasks);

// NODE JS COURSE

// async function createAuthor(name, bio, web) {
//   const author = new Author({
//     name,
//     bio,
//     web,
//   });

//   const res = await author.save();
//   console.log(res);
// }

// async function createCourse(name, author) {
//   const course = new Course({
//     name,
//     author,
//   });

//   const res = await course.save();
//   console.log(res);
// }

// async function listCourses() {
//   const courses = await Course.find()
//     .populate("author", "name -_id")
//     .select("author name");
//   console.log(courses);
// }

async function createGenres(name) {
  const genre = new Genres({
    name,
  });

  const res = await genre.save();
  console.log(res);
}

async function createMovies(title, genre, numberInStock, dailyRentalRate) {
  const movie = new Movies({
    title,
    genre,
    numberInStock,
    dailyRentalRate,
  });

  const res = await movie.save();
  console.log(res);
}

async function listMovies() {
  const movies = await Movies.find();
  console.log(movies);
}

// Routes

// createGenres("Fantasy");
// createMovies("SAO", "5f3a886f807e4d41a459ef39", 0, 0);
// listMovies();
// getProducts();
// =============================================
const port = process.env.PORT || 7999;
app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
