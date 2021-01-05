const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const requirePost = require("./routes/posts");
const receivedEvent = require("./routes/eventBus");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/posts", requirePost);
app.use("/events", receivedEvent);

// const port = process.env.port || 4000;
const port = 4002;
app.listen(port, () => {
  console.log(`Query on port: ${port}`);
});
