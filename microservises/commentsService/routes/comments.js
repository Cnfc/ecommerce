const express = require("express");

const router = express.Router();

const { getComments, sendComments } = require("../controllers/comments");

router.get("/:id/comments", getComments);
router.post("/:id/comments", sendComments);

module.exports = router;
