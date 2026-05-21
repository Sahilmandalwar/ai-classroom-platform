import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

dotenv.config();

const port = process.env.port || 5000;

const app = express();
connectDB()

app.use(cors());
app.use(express.json());

app.use('/v1/api/auth',authRoutes)

app.get("/",(req, res)=>{
    res.send("Welcome To AI Classroom Platform");
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}` );
})
