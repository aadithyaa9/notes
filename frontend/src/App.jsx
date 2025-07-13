import { Route, Routes } from 'react-router-dom';
import "../src/index.css"
import Create from "./pages/Create";
import Homepage from './pages/Homepage';
import NoteDetail from './pages/NoteDetail';
import toast from 'react-hot-toast';
const App = () => {
  return( <div data-theme="coffee">
    
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/note/:id" element={<NoteDetail/>} />


      </Routes>
    </div>
  )
};

export default App
