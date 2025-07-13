import Note from "../models/Note.js"

export async function getNotes(req , res){
    try{
        const notes = await Note.find()
        res.status(200).json(notes)
    }catch(error){
        console.error("Error in getAllNotes controller",error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

export async function createNotes(req , res){
    try{
        const {title , content} = req.body
        const note = new Note({title:title , content:content})
        console.log({"title":title,"content":content});

        const savedNote = await note.save()
        res.status(201).json(savedNote)
    }catch(error){
        console.log(error);
    }
}

export async function updateNotes(req , res){
    try{
        const {title,content} = req.body
        const updated = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if (!updated)return res.status(404).json({message:"Node not found"})
        res.status(200).json({message:"Note updated successfully"})
    }catch(error){
        console.log(error);
    }
}


export async function deleteNode(req , res){
    try{

        const deleted = await Note.findByIdAndDelete(req.params.id)
        if (!deleted) return res.status(404).json({message:"You cannot delete this"})
        res.status(200).json(deleted)

    }catch(error){
        console.log(error)
    }
}

export async function getID(req ,res){
    try{
        const getone = await Note.findById(req.params.id)
        if (!getone) return res.status(404).json({message:"CANNOT FIND WHAT YOU ARE LOOKING FOR"})
        res.status(200).json(getone)
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Cannot find the one you are loooking for"})
    }
}
