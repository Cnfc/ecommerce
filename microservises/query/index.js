const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const cors = require("cors");

const requirePost = require("./routes/posts");
const receivedEvent = require("./routes/eventBus");

// const { handleEvent } = require("./controllers/posts");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.use("/posts", requirePost);
// app.use("/events", receivedEvent);

const posts = {};

const handleEvent = (type, data) => {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;
    comment.content = content;
  }
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  console.log("Received Event type", req.body.type);

  handleEvent(type, data);

  res.send({});
});

app.get("/posts", async (req, res) => {
  res.status(201).json(posts[id]);
});

// const port = process.env.port || 4000;
const port = 4002;
app.listen(port, async () => {
  console.log(`Query on port: ${port}`);

  const res = await axios.get("http://localhost:4005/events");

  for (let event of res.data) {
    console.log("Processing Event:", event.type);
    // const {type, data} = event;

    handleEvent(event.type, event.data);
  }
});
