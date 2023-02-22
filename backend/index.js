import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectionToDb from "./utils/connectionToDb.js";
import protectedRoute from "./routes/protectedRoute.js";
import registerRoute from "./routes/registerRoute.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api/", registerRoute);
app.use("/api/auth", authRoute);
app.use("/p/*", protectedRoute);

const server = createServer(app);

const io = new Server(server, {
  path: "/p/chat",
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const messages = [];

io.on("connection", (socket) => {
  socket.emit("receivedMessage", messages);
  socket.on("sendMessage", ({ message, name }) => {
    messages.push({ message, name });
    io.emit("receivedMessage", messages);
  });
  socket.on("disconnect", () => {});
});

server.listen(3001, () => connectionToDb());
