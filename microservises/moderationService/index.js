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
    // status
    const status = data.content.includes("orange") ? "rejected" : "approved";

    console.log(status);
    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        ...data,
        status,
      },
    });
  }
  res.send({});
});

const port = 4003;
app.listen(port, () => {
  console.log(`Moderation Service on port: ${port}`);
});
