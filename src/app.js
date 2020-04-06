const express = require("express");
const app = express();
const port = 3000;

app.post("*", function (req, res, next) {
  if (req.method === "POST" && req.url === "/echo") {
    req.pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
