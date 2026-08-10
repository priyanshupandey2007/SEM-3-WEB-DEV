const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("welcome to home page");
  } else if (Req.url == "/about") {
    res.end("/About");
  } else if (Req.url == "/login") {
    res.end("/login");
  } else {
    res.end("Not Found");
  }
});

server.listen(8080, () => {
  console.log("server is running on server 8080");
});
