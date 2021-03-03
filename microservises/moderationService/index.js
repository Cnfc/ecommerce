const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
// const requirePost = require("./routes/posts");

const app = express();
app.use(bodyParser.json());
// app.use("/events", receivedEvent);

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    await axios.post("http://event-bus-srv:4005/events", {
      type: "CommentModerated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
  }

  res.send({});
});

const port = 4003;
app.listen(port, () => {
  console.log(`Moderation Service on port: ${port}`);
});
