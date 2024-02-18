const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/dbConnection');
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const {notFound,errorHandler} = require("./middleware/errorMiddleware");
const {createServer} = require("http");
const path = require("path");

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();



// Middleware
app.use(express.json());
app.use(cors()); // Apply CORS middleware
app.use(bodyParser.urlencoded({ extended: false }));
// Error Handling Middleware
app.use(errorHandler);
// app.use(notFound);

// Routes
app.use("/users", userRoutes);
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);

// ------ Deployment --------

const __dirname1 = path.resolve();
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname1, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  })
}
else{
  app.get('/', (req, res) => {
    res.send("API is running successfully");
  })
}


// ------ Deployment --------


const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  console.log(socket.id);
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  // socket.on("typing", (room) => socket.in(room).emit("typing"));
  // socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});

module.exports = server;
