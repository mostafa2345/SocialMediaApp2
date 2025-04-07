import express from "express";
import { logOut, login, singUp } from "../controllers/authController.js";
const router = express.Router();
router.post("/signup", singUp);
router.post("/login", login);
router.post("/logout", logOut);
export default router;
