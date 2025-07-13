import { useState } from "react"
import Navbar from "../components/Navbar"
import RateLimited from "../components/RateLimited"
import { useEffect } from "react"
import axios from "axios"
import toast from "react-hot-toast"
const Homepage = () => {
const [isRateLimited  , setRateLimited]=useState(true)
const [notes,setNotes] = useState([])

const[loading, setLoading] = useState(false)

useEffect(()=>{const fetchNotes = async()=>{
    try{
        const res = await axios.get("http://localhost:5001/api/notes");
        console.log(res.data)
        setNotes(res.data)
        setRateLimited(false)


    }catch(error){
        console.log(error)
        if (error.response.status ==429){
            setRateLimited = true
        }else{
            toast.error("Failed to load nodes");
        }
    }finally{
        setLoading(false)
    }
};
fetchNotes();
},[]);
  return (
    <div className="min-h-screen">
        <Navbar/>
    {isRateLimited && <RateLimited/>}
    </div>
  )
}

export default Homepage
