import { signup, login, fetchCurrentUser } from "../controllers/authController.js";
import express from 'express';
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", authMiddleware,fetchCurrentUser);

export default router;