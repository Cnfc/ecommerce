const { randomBytes } = require("crypto");

const posts = {};

exports.getPost = (req, res) => {
  // res.send(posts);
  res.json(posts);
};

exports.sendPost = (req, res) => {
  const id = randomBytes(8).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).json(posts[id]);
};
