const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const axios = require("axios");

const requirePost = require("./routes/posts");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/posts", requirePost);

// const port = process.env.port || 4000;
const port = 4000;
app.listen(port, () => {
  console.log(`Posts on port: ${port}`);
});
