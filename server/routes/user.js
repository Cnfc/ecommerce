const express = require("express");
const router = express.Router();

// console.log("Loading routes");

const { userById, read, update } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

router.get("/secret/:userId", requireSignin, (req, res) => {
  res.json({ user: req.profile });
});

router.param("userId", userById);

router.get("/user/:userId", requireSignin, isAuth, read);
router.put("/user/:userId", requireSignin, isAuth, update);

module.exports = router;
