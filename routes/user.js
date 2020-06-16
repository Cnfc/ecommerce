const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

router.get("/secret/:userId", requireSignin, (req, res) => {
  res.json({ user: req.profile });
});

router.param("userId", userById);

// router.get("/hello", requireSignin, (req, res) => {
//   res.send("Hello there");
// });

module.exports = router;
