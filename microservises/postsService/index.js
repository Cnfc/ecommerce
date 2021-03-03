const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const axios = require("axios");
const cors = require("cors");
const time = require("./assets/time").time;
// const requirePost = require("./routes/posts");
// const receivedEvent = require("./routes/eventBus");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.use("/posts", requirePost);
// app.use("/events", receivedEvent);

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

const Url = "http://event-bus-srv:4005/events";
app.post("/posts", async (req, res) => {
  const { title } = req.body;
  const id = randomBytes(8).toString("hex");
  const currentTime = time();

  posts[id] = {
    id,
    title,
    currentTime,
  };

  console.log(posts);

  await axios.post(Url, {
    type: "PostCreated",
    data: { id, title },
  });

  res.status(201).json(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Received Event:", req.body.type);

  res.send({});
});

// const port = process.env.port || 4000;
const port = 4000;
app.listen(port, () => {
  console.log(Url);
  console.log(`v100`);
  console.log(`Posts on port: ${port}`);
});
