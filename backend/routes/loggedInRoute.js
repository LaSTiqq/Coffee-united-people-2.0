import express from "express";
import getAllUsers from "../controllers/loggedInController.js";

const router = express.Router();

router.get("/get", getAllUsers);

export default router;
