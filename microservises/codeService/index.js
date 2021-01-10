const express = require("express");
const bodyParser = require("body-parser");

const { twoNumberSum } = require("./problems/1");

const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("here");
});

// const port = process.env.port || 4000;
const port = 4009;
app.listen(port, () => {
  console.log(`Posts on port: ${port}`);
});
