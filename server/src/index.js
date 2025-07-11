
const express = require("express");         
const http = require("http");               
const cors = require("cors");              
const { Server } = require("socket.io");    

// Initialize the Express app
const app = express();
app.use(cors()); 

//  Create the HTTP server and bind it with the Express app
const server = http.createServer(app);

//  Set up Socket.IO on top of the HTTP server
const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});

//  Handle real-time socket connections
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id); 

  //  Join a collaborative room
  socket.on("join", (roomId) => {
    socket.join(roomId); // Join a specific room
    console.log(`${socket.id} joined room ${roomId}`);
  });

  //  Leave the room
  socket.on("leave", (roomId) => {
    socket.leave(roomId); 
    console.log(`${socket.id} left room ${roomId}`);
  });

  //  Receive code  and broadcast it to everyone 
  socket.on("code-change", ({ roomId, code, language }) => {
    socket.to(roomId).emit("code-change", { code, language }); 
  });

  // Handle disconnects
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Start the server 
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
