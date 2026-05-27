import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import classroomRoutes from "./routes/classroomRoute.js";
import announcementRoutes from './routes/announcementRoute.js';
import sessionRoutes from "./routes/sessionRoute.js";
import notesRoutes from "./routes/notesRoute.js";
import attendenceRoutes from "./routes/attendenceRoute.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
connectDB()

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use('/v1/api/auth',authRoutes);
app.use('/v1/api/classroom', classroomRoutes);
app.use("/v1/api/announcement", announcementRoutes);
app.use("/v1/api/session", sessionRoutes);
app.use("/v1/api/notes", notesRoutes);
app.use("/v1/api/attendence", attendenceRoutes);

app.get("/",(req, res)=>{
    res.send("Welcome To AI Classroom Platform");
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}` );
})
