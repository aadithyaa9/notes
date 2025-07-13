import express from "express";
import notesRoute from "./routes/notesRoute.js"
import { connectDb } from "./config/d.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config();
const app = express()
const PORT= process.env.PORT || 5001

app.use(express.json()) 
app.use(rateLimiter);
//middleware
app.use("/api/notes" , notesRoute)




connectDb().then(()=>{



app.listen(5001, ()=>{
    console.log("RUNNING!!");
})
})