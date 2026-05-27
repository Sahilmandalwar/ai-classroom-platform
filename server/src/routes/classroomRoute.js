import express from 'express';
import { createClassroom , fetchClassroom, getMyClassroom, joinClassroom} from '../controllers/classroomController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/create",authMiddleware,createClassroom);
router.post("/join", authMiddleware, joinClassroom);
router.get("/my-classroom", authMiddleware, getMyClassroom);
router.get("/:classId", authMiddleware, fetchClassroom);
export default router;