import { ArrowLeftIcon, Trash2, PenSquareIcon } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const NoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/notes/${id}`);
        setNote(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch note");
        navigate("/");
      }
    };
    fetchNote();
  }, [id]);

  const handleUpdate = async () => {
    if (!title || !content) {
      toast.error("Title and content are required");
      return;
    }
    try {
      await axios.put(`http://localhost:5001/api/notes/${id}`, { title, content });
      toast.success("Note updated");
      setEditMode(false);
      setNote({ ...note, title, content });
    } catch (error) {
      console.log(error);
      toast.error("Failed to update note");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await axios.delete(`http://localhost:5001/api/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete note");
    }
  };

  if (!note) {
    return <div className="text-center py-10 text-primary">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-base-100 p-6 rounded-lg shadow">
          <Link to="/" className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          {editMode ? (
            <>
              <input
                type="text"
                className="input input-bordered w-full mb-4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="textarea textarea-bordered w-full h-40 mb-4"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <div className="flex gap-2">
                <button onClick={handleUpdate} className="btn btn-primary">Save</button>
                <button onClick={() => setEditMode(false)} className="btn btn-ghost">Cancel</button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2 text-primary">{note.title}</h2>
              <p className="mb-4">{note.content}</p>
              <div className="flex gap-2">
                <button onClick={() => setEditMode(true)} className="btn btn-outline">
                  <PenSquareIcon className="size-4" />
                  Edit
                </button>
                <button onClick={handleDelete} className="btn btn-error">
                  <Trash2 className="size-4" />
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;