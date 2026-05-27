import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js"
import { createSession, deleteSession, getClassroomSessions } from "../controllers/sessionController.js";

const router = express.Router();

router.post("/create/:classroomId",authMiddleware, createSession);
router.get("/:classroomId", authMiddleware, getClassroomSessions);
router.delete("/:sessionId", authMiddleware, deleteSession);

export default router;