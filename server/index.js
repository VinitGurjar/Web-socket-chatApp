// //Backend site code
// const WebSocket = require("ws");
// const server = new WebSocket.Server({ port: "8080" });
// //Event based system and the 1st event is connection with the client
// server.on("connection", (socket) => {
//   //Accessing to websocket object in the callback
//   socket.on("message", (message) => {
//     //listening to messages
//     //send message to client
//     socket.send(`!!captain ${message} `);
//   });
// });
// //nodejs backend

/* Creating an http server by using http lib in node */
const http = require("http").createServer();
//importing socket as an function with argument http
const io = require("socket.io")(http, {
  //Accinsing backend from a browser
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (message) => {
    console.log(message);
    //TO visible the message to every user
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });
});
http.listen(8080, () => console.log("listening on http://localhost:8080"));
