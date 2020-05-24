const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

// APP
const app = express();

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

// ROUTES
app.get("/", (req, res) => {
  res.send("OK");
});

// =============================================
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
