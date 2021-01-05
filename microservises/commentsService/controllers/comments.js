const axios = require("axios");
const { randomBytes } = require("crypto");

const commentsByPostId = {};

exports.getComments = (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
};

exports.sendComments = async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: { id: commentId, content, postId: req.params.id },
  });

  res.status(201).send(comments);
};
