import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { getMyAttendance, getSessionAttendance, markAttendance } from "../controllers/attendenceController.js";

const router = express.Router();

router.post("/mark", authMiddleware, markAttendance);
router.get("/fetch/:sessionId", authMiddleware, getSessionAttendance);
router.get("/my-attendence/:classId", authMiddleware, getMyAttendance)
export default router;