import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js"
import { upload } from "../middlewares/uploadMiddleware.js";
import { getClassroomNotes, uploadNotes } from "../controllers/notesController.js";


const router = express.Router();

router.post("/upload/:classroomId",authMiddleware, upload.single('file'),uploadNotes);
router.get("/:classroomId", authMiddleware, getClassroomNotes);

export default router;