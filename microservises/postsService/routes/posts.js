const express = require("express");

const router = express.Router();

const { getPost, sendPost } = require("../controllers/posts");

router.get("/", getPost);
router.post("/", sendPost);

module.exports = router;
