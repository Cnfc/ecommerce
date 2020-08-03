const express = require("express");
const router = express.Router();

router.get("/courses", (req, res) => {
  console.log("Authenticating...");
  res.send("NEW HELLLO");
});

module.exports = router;
