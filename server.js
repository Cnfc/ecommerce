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

const Product = require("./models/product");
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
