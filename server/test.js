http.createServer((req, res) => {
  req
    .on("data", () => {
      //prompt('Enter your name);
    })
    .on("end", () => {
      res.write("");
      res.end();
    });
});
