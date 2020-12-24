const express = require("express");
const router = express.Router();

router.get("/courses", (req, res, next) => {
  console.log("Authenticating...");
  next();
});

module.exports = router;
