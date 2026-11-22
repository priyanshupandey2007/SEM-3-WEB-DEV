// npm init -y
// npm i socket.io
const express = require("express");
const http = require("http");

const { Server } = require("socket.io");
const app = express();

const httpserver = http.createServer(app);

const io = new Server(httpserver);

let count = 0;
io.on("connection", (socket) => {
  count++;
  console.log("Active user:", count);

  // sending
  socket.emit("gyaankibaat", "welcome to socket.io server");

  socket.broadcast.emit("join", "New user joined");

  // reading
  socket.on("kuchbhi", (msg) => {
    console.log(msg);
  });

  socket.on("disconnect", () => {
    count--;
    console.log("Active user:", count);
  });

  io.emit("announcement", "Today is last time we study web dev 3");
});

httpserver.listen(8080, () => {
  console.log("server started");
});