import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Navbar from './components/Navbar.jsx';
import '../src/index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Toaster />
  </BrowserRouter>
);