import express from "express";
import notesRoute from "./routes/notesRoute.js"
import { connectDb } from "./config/d.js";
import dotenv from "dotenv";

dotenv.config();
const app = express()
const PORT= process.env.PORT || 5001
connectDb(); 
app.use("/api/notes" , notesRoute)





app.listen(5001, ()=>{
    console.log("RUNNING!!");
})