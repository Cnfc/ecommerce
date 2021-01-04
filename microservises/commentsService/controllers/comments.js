const { randomBytes } = require("crypto");

const commentsByPostId = {};

exports.getComments = (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
};

exports.sendComments = (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
};
