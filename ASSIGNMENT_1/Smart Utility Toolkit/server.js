const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received:", req.url);

  if (req.url === "/") {
    res.end("Welcome to my Node.js Server");
  } else if (req.url === "/about") {
    res.end("This is the About Page");
  } else if (req.url === "/contact") {
    res.end("This is the Contact Page");
  } else {
    res.end("404 - Page Not Found");
  }
});

server.listen(8080, () => {
  console.log("Server is running ");
});
