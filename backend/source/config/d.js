import mongoose from "mongoose"

export const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo Db connected");
    }catch(error){
        console.error("Error Connecting to MongoDB" , error);
        process.exit(1);
    }
}