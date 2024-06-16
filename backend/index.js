require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const socket = require("socket.io");

const userRoute = require("./route/userRoute");
const messageRoute = require("./route/messageRoute");

const app = express();

app.use(cors());
app.use(express.json());

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
// header(
//   "Access-Control-Allow-Headers",
//   "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-Token"
// );

app.use("/api/auth", userRoute);
app.use("/api/messages", messageRoute);

mongoose.connect(process.env.MONGO_URL).then(console.log("db connected"));

const server = app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
  global.chatSocket = socket;

  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });
});
