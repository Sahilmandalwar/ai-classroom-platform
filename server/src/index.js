import express from "express";
import cors from "cors";
import dotenv from 'dotenv';



const port = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req, res)=>{
    res.send("Welcome To AI Classroom Platform");
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}` );
})