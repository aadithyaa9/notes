import { useState, useEffect } from "react";
import RateLimited from "../components/RateLimited";
import axios from "axios";

import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";

const Homepage = () => {
  const [isRateLimited, setRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        setNotes(res.data);
        setRateLimited(false);
      } catch (error) {
        console.log(error);
        if (error.response?.status === 429) {
          setRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  const handleDeleted = (id) => {
    setNotes((prev) => prev.filter((note) => note._id !== id));
  };

  return (
    <div className="min-h-screen">
      {isRateLimited && <RateLimited />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading Notes...</div>}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} onDeleted={handleDeleted} />
            ))}
          </div>
        )}

        {!loading && notes.length === 0 && !isRateLimited && (
          <div className="text-center text-base-content/70 py-10">No notes found. Create one!</div>
        )}
      </div>
    </div>
  );
};

export default Homepage;