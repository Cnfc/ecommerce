const axios = require("axios");

exports.receivedEvent = (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
};
