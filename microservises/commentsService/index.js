const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const requireComments = require("./routes/comments");
// const receivedEvent = require("./routes/eventBus");
const receivedEvent = require("./routes/comments");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/posts", requireComments);

app.use("/events", receivedEvent);

// const port = process.env.port || 4000;
const port = 4001;
app.listen(port, () => {
  console.log(`Comments on port: ${port}`);
});
