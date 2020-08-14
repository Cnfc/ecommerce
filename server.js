const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const helmet = require("helmet");
const config = require("config");
const debug = require("debug")("app:startup");
require("dotenv").config();

const Courses = require("./models/course");
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

// ROUTES
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

app.use("/api", logRouter);

app.use("/api/courses", courses);

async function createCourse() {
  const course = new Courses({
    name: "Angular  Sourse Course",
    category: "Web",
    author: "Mosh",
    tags: ["frontend"],
    isPublished: true,
    price: 15.8,
  });

  try {
    const res = await course.save();
    console.log(res);
  } catch (ex) {
    for (field in ex.errors) console.log(ex.errors[filed].message);
  }
}

// createCourse();

async function getCourse() {
  const courses = await Courses.find().select({ author: 1 });
  console.log(courses);
}

// getCourse();

// async function updateCourse(id) {
//   const course = await Courses.findByIdAndUpdate(id, {
//     $set: {
//       author: "Stanislav",
//       name: "Learn Reactjs",
//     },
//   });
//   console.log(course);
// }

// updateCourse("5f354469e633d15ae2a034ac");

// =============================================
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
