import { Server } from "socket.io";

const messages = [];

const setupSocket = (server) => {
  const io = new Server(server, {
    path: "/p/chat",
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    socket.emit("receivedMessage", messages);

    socket.on("sendMessage", ({ message, name }) => {
      messages.push({ message, name });
      io.emit("receivedMessage", messages);
    });

    socket.on("disconnect", () => {});
  });
};

export default setupSocket;
