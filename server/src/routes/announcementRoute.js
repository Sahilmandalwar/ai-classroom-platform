import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createAnnouncement, deleteAnnouncement, getClassroomAnnouncement } from '../controllers/announcementController.js';

const router = express.Router();

router.post("/create", authMiddleware, createAnnouncement);
router.get("/:classId", authMiddleware, getClassroomAnnouncement);
router.delete("/:announcementId", authMiddleware, deleteAnnouncement);


export default router;