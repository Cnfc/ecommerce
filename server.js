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

const Product = require("./models/product");
// const Course = require("./models/course");
// const Author = require("./models/authors");
// import Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const logRouter = require("./routes/logger");
const courses = require("./routes/courses");
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

// MiddleWare ==================================

// if (app.get("env") === "development") {
//   app.use(morgan("dev"));
//   debug("Morgan enabled...");
// }

// console.log("");
// console.log("============== Config =========================");
// console.log("Application Name:" + config.get("name"));
// console.log("Mail Server Name:" + config.get("mail.host"));
// console.log("Mail Password:" + config.get("mail.password"));
// console.log("============== Config =========================");
// console.log("");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(helmet());
app.use(cors());

// ROUTES
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

app.use("/api", logRouter);

// NODE JS COURSE
const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 200,
  },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"],
    lowercase: true,
  },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
    min: 10,
    max: 200,
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
  },
  authors: [authorSchema],
  tags: [String],
  date: { type: Date, default: Date.now },
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  })
);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });
  const res = await author.save();
  console.log(res);
}

createCourse("Node Course", [
  new Author({ name: "Mosh", bio: "21", website: "yahoo" }),
  new Author({ name: "John", bio: "15", website: "mamma" }),
]);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors,
  });

  const res = await course.save();
  console.log(res);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

createCourse("Node Course", [
  new Author({ name: "Mosh" }),
  new Author({ name: "John" }),
]);

// async function getProducts() {
//   const courses = await Product.find().select(["name", "price", "description"]);
//   console.log(courses);
// }

// getProducts();
// =============================================
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
