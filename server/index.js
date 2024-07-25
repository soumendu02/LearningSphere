import express from "express";
import dotenv from "dotenv"
import { connectDb } from "./DB/db.js";
import userRoutes from './routes/user.js'
import courseRoutes from './routes/course.js'
import adminRoutes from './routes/admin.js'
import Razorpay from 'razorpay';
import cors from 'cors';

dotenv.config();

export const instance=new Razorpay({
    key_id:process.env.Razorpay_Key,
    key_secret:process.env.Razorpay_Secret
})

const app=express();


app.use(express.json());
app.use(cors());

const port=process.env.PORT;

//using routes
app.use('/api',userRoutes);
app.use('/api',courseRoutes);
app.use('/api',adminRoutes);
app.use("/uploads",express.static("uploads"))

app.get("/",(req,res)=>{
    res.send("Server is working");
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
})