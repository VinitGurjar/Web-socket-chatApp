//Backend site code
const WebSocket = require("ws");
const server = new WebSocket.Server({ port: "8080" });
//Event based system and the 1st event is connection with the client
server.on("connection", (socket) => {
  //Accessing to websocket object in the callback
  socket.on("message", (message) => {
    //listening to messages
    //send message to client
    socket.send(`!!captain ${message} `);
  });
});
