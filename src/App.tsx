import React from 'react';
import Randevu from "./pages/Randevu"
import './index';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Navbar from "./components/navbar";



function App() {
  return (
    <div className="App ">
      
      <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/randevu" element={<Randevu />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
