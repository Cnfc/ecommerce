const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("homepage");
  res.send("hi homepage");
});

const PORT = 4010;
app.listen(8080, () => {
  console.log("Works on port:", PORT);
});
