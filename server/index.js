import cookieParser from "cookie-parser";
import { createServer } from "http";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectionToDb from "./utils/connectionToDb.js";
import setupSocket from "./utils/socket.js";
import authRoute from "./routes/authRoute.js";
import protectedRoute from "./routes/protectedRoute.js";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

app.use("/api", authRoute);
app.use("/p", protectedRoute);

const server = createServer(app);

setupSocket(server);

server.listen(3001, () => connectionToDb());
