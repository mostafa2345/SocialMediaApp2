import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { sendMessage, getMessage } from "../controllers/messageController.js";
const router = express.Router();
router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessage);
export default router;
