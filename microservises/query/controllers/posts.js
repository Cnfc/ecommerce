const posts = {};

exports.getPost = (req, res) => {
  res.send(posts);
};

exports.sendPost = async (req, res) => {
  res.status(201).json(posts[id]);
};

exports.receivedEvent = (req, res) => {
  const { type, data } = req.body;
  console.log("Received Event type", req.body.type);

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

  res.send({});
};
