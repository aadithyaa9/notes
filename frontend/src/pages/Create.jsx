import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../lib/axios";
import toast from "react-hot-toast";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      toast.error("Title and content are required");
      return;
    }
    setLoading(true);
    try {
      await axios.post("http://localhost:5001/api/notes", { title, content });
      toast.success("Note created successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to create note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-base-100 p-6 rounded-lg shadow">
          <Link to="/" className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>
          <h2 className="text-2xl font-bold mb-4 text-primary">Create a New Note</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Content"
              className="textarea textarea-bordered h-40"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Note"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;