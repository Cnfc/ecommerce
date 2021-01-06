const express = require("express");

const router = express.Router();

const { getComments, sendComments } = require("../controllers/comments");
const { receivedEvent } = require("../controllers/comments");

router.get("/:id/comments", getComments);
router.post("/:id/comments", sendComments);

router.post("/", receivedEvent);

module.exports = router;
