import express from "express";
import cors from "cors";
import connectionToDb from "./utils/connectionToDb.js";
import authRouter from "./routes/authRoute.js";
import loggedInRouter from "./routes/loggedInRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", authRouter);
app.use("/", loggedInRouter);

app.listen(3001, () => connectionToDb());
