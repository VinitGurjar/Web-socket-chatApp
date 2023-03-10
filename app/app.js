//Client site code with a websocket class and a url that points to the server
const socket = new WebSocket("ws://localhost:8080");

//listen for messages and the ws protocol automatically trigger the handshake to open the connection
socket.onmessage = ({ data }) => {
  console.log("Message from server", data);
};

document.querySelector("baton").onClick = () => {
  socket.dispatchEvent("namaste");
};
