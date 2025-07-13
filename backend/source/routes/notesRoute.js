import express from "express"
import { createNotes, deleteNode, getNotes, updateNotes,getID } from "../controllers/notesControl.js";


const router = express.Router();

router.get("/",getNotes )
router.get("/:id" , getID)
router.post("/" , createNotes)

router.put("/:id" , updateNotes)

router.delete("/:id" , deleteNode)

export default router