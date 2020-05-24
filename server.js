const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
require("dotenv").config();
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

// ROUTES
app.use("/api", userRoutes);

// =============================================
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
