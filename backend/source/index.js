import express from "express";
import notesRoute from "./routes/notesRoute.js"
import { connectDb } from "./config/d.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimiter.js";
import cors from "cors"

import path from "path"
dotenv.config();
const app = express()
const PORT= process.env.PORT || 5001
const __dirname = path.resolve()
app.use(express.json());

if (process.env.NODE_ENV === "production"){
app.use(cors({
    origin:"http://localhost:5173",
}));
}
app.use(rateLimiter);

//middleware
app.use("/api/notes" , notesRoute)

if (process.env.NODE_ENV === "production"){
app.use(express.static(path.join(path.join(__dirname,"../frontend/dist"))))
app.get("*" , (req,res) =>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
});
}

connectDb().then(()=>{



app.listen(5001, ()=>{
    console.log("RUNNING!!");
})
})