import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectionToDb from "./utils/connectionToDb.js";
import authRouter from "./routes/authRoute.js";
import loggedInRouter from "./routes/loggedInRoute.js";
import logoutRoute from "./routes/logoutRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/", authRouter);
app.use("/", loggedInRouter);
app.use("/", logoutRoute);

app.listen(3001, () => connectionToDb());
