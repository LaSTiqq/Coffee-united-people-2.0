import express from "express";
import getAllUsers from "../controllers/loggedInController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/get", verifyToken, getAllUsers);

export default router;
