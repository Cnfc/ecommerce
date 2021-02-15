const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const axios = require("axios");
const { randomBytes } = require("crypto");

// const requireComments = require("./routes/comments");
// const receivedEvent = require("./routes/eventBus");
// const receivedEvent = require("./routes/comments");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.use("/posts", requireComments);
// app.use("/events", receivedEvent);

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.status(201).send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const postId = req.params.id;
  const commentId = randomBytes(8).toString("hex");

  const { content } = req.body;

  const comments = commentsByPostId[postId] || [];

  comments.push({
    id: commentId,
    content,
    status: "pending",
  });

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: { id: commentId, content, postId, status: "pending" },
  });

  commentsByPostId[postId] = comments;

  res.status(201).send(comments);
});

app.post("/events", async (req, res) => {
  console.log("Received Event:", req.body.type);
  // const postId = req.params.id;

  const { type, data } = req.body;

  if (type === "CommentModerated") {
    const { postId, id, content, status } = data;
    const comments = commentsByPostId[postId];

    console.log(data);
    const comment = comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;

    await axios.post("http://localhost:4005/events", {
      type: "CommentUpdated",
      body: {
        id,
        status,
        postId,
        content,
      },
    });
  }

  res.send({});
});

// const port = process.env.port || 4000;
const port = 4001;
app.listen(port, () => {
  console.log(`Comments on port: ${port}`);
});
