import { Link, useNavigate } from 'react-router-dom';
import { Trash2, PenSquareIcon } from 'lucide-react';
import { formatDate } from '../lib/util.js';
import api from "../lib/axios";

import toast from 'react-hot-toast';

const NoteCard = ({ note, onDeleted }) => {
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${note._id}`);
      toast.success("Note deleted");
      if (onDeleted) onDeleted(note._id);
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link to={`/note/${note._id}`} className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-[#00FF9D]">
      <div className='card-body'>
        <h3 className='card-title text-base-content'>{note.title}</h3>
        <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
        <div className='card-actions justify-between items-center mt-4'>
          <span className='text-sm text-base-content/60'>{formatDate(new Date(note.createdAt))}</span>
          <div className='flex items-center gap-1'>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate(`/note/${note._id}`);
              }}
              className="btn btn-ghost btn-xs"
            >
              <PenSquareIcon className='size-4' />
            </button>
            <button onClick={handleDelete} className="btn btn-ghost btn-xs">
              <Trash2 className='size-4 text-error' />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;