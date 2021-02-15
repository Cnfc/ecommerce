const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const cors = require("cors");

// const requirePost = require("./routes/posts");
// const receivedEvent = require("./routes/eventBus");

// const { handleEvent } = require("./controllers/posts");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts", async (req, res) => {
  // res.status(201).json(posts[id]);
  res.send(posts);
});

// app.post()

// app.use("/posts", requirePost);
// app.use("/events", receivedEvent);

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
    console.log(data);
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }
};

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  // console.log(data);
  // handleEvent(type, data);
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
    console.log(data);
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }

  res.send({});
});

// const port = process.env.port || 4000;
const port = 4002;
app.listen(port, () => {
  console.log(`Query on port: ${port}`);
});
