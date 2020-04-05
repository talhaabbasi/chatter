const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "public")));

//Run when a client connects
io.on("connection", (socket) => {
  //   Single Client
  socket.emit("message", "Welcome to Chatter!");

  //   All the clients accept the one sending
  socket.broadcast.emit("message", "A user has joined the chat");

  socket.on("disconnect", () => {
    io.emit("message", "A user has left the chat");
  });

  socket.on("chatMessage", (message) => {
    io.emit("message", message);
  });
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));
