const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("homepage");
  res.send("hi");
});

const PORT = 4010;
app.listen(PORT, () => {
  console.log("Works on port:", PORT);
});
