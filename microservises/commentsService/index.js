const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const requireComments = require("./routes/comments");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/posts", requireComments);

// const port = process.env.port || 4000;
const port = 4001;
app.listen(port, () => {
  console.log(`Posts on port: ${port}`);
});
