const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const helmet = require("helmet");
const config = require("config");
require("dotenv").config();

// import Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const logRouter = require("./routes/logger");
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
// }

console.log("Application Name:" + config.get("name"));
console.log("Mail Server Name:" + config.get("mail.host"));

app.use(morgan("dev"));

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

const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});

// =============================================
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
