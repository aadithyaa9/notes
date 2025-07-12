import express from "express";
import notesRoute from "./routes/notesRoute.js"
const app = express()


app.use("/api/notes" , notesRoute)



// app.get("/api/notes" , (req,res)=>{
//     res.send("YOu got 5 notes");
// });

// app.post("/api/notes" , (req,res)=>{
//     res.status(201).json({message:"post created succcessfully"})
// })

// app.put("/api/notes/:id" , (req,res)=>{
//     res.status(200).json({message:"post updated succcessfully"})
// })

// app.delete("/api/notes/:id" , (req,res)=>{
//     res.status(200).json({message:"note deleted succcessfully"})
// })

app.listen(5001, ()=>{
    console.log("RUNNING!!");
});