// //Client site code with a websocket class and a url that points to the server
// const socket = new WebSocket("ws://localhost:8080");

// //listen for messages and the ws protocol automatically trigger the handshake to open the connection
// socket.onmessage = ({ data }) => {
//   console.log("Message from server", data);
// };

// document.querySelector("baton").onClick = () => {
//   socket.dispatchEvent("namaste");
// };

// //front end javascript app

const socket = io("ws://localhost:8080");

socket.on("message", (text) => {
  const writesom = document.createElement("le");
  writesom.innerHTML = text;
  document.qyuerySelector("abb kiya").appendChild(writesom);
});
// Giving user power to send messages
document.querySelector("button").onclick = () => {
  const text = document.querySelector("input").value;
  socket.emit("message", text);
};
