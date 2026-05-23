import express from 'express';
import { createClassroom , getMyClassroom, joinClassroom} from '../controllers/classroomController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/create",authMiddleware,createClassroom);
router.post("/join", authMiddleware, joinClassroom);
router.get("/my-classroom", authMiddleware, getMyClassroom);
export default router;