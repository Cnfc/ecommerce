const express = require("express");

const router = express.Router();

const { receivedEvent } = require("../controllers/eventBus");

router.post("/", receivedEvent);

module.exports = router;
