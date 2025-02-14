// filepath: /path/to/your/project/src/services/socket.js
import io from "socket.io-client";

const socket = io("https://b36a-2405-4800-5716-1560-8d89-3a68-30e2-e7a6.ngrok-free.app"); // Replace with your backend URL

socket.on("connect", () => {
  // console.log("Connected to WebSocket server");
});

socket.on("incomingOrder", (order) => {
  // console.log("New order received:", order);
  // Handle the incoming order notification
});

export default socket;
