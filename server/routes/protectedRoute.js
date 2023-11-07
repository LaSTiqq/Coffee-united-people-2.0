import express from "express";
import protectedPages from "../controllers/protectedController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/*", verifyToken, protectedPages);

export default router;
