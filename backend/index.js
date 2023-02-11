import cookieParser from "cookie-parser";
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

app.use("/api/register", registerRoute);
app.use("/api/auth", authRoute);
app.use("/p", protectedRoute);

app.listen(3001, () => connectionToDb());
