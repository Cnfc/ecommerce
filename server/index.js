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

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const logRouter = require("./routes/logger");

// ============================================

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
// MIDDLEWARES;
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(helmet());
app.use(cors());

// ROUTES
app.use("/", (req, res) => {
  res.send("Server is working with first setup correct ");
});
app.use("/api", authRoutes);
app.use("/api", userRoutes);

app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

// =============================================
const port = process.env.PORT || 7999;
app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
