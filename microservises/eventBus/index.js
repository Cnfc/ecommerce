const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// EventBus RadditMQ, Kafka, NATS

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);
  axios.post("http://localhost:4003/events", event);

  res.send({ status: "OK" });
});

// const port = process.env.port || 4000;
const port = 4005;
app.listen(port, () => {
  console.log(`EventBus on port: ${port}`);
});
