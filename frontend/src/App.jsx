import { Route, Routes } from 'react-router-dom';
import "../src/index.css"
import Create from "./pages/Create";
import Homepage from './pages/Homepage';
import NoteDetail from './pages/NoteDetail';
import toast from 'react-hot-toast';
const App = () => {
  return( <div data-theme="coffee">
      <button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/note/:id" element={<NoteDetail/>} />


      </Routes>
    </div>
  )
};

export default App
