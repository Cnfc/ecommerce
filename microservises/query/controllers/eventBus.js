exports.receivedEvent = (req, res) => {
  const { type } = req.body;
  console.log("Received Event type", req.body.type);

  if (type === "PostCreated") {
    //
  } else if (type === "CommentCreated") {
    //
  } else {
    res.send("something went Wrong");
  }
  res.send({});
};
