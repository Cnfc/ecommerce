const express = require("express");

const router = express.Router();

// const { receivedEvent } = require("../controllers/eventBus");
const { receivedEvent } = require("../controllers/posts");

router.post("/", receivedEvent);

module.exports = router;
