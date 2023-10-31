import React, {useState} from 'react';
import Randevu from "./pages/Randevu"
import './index';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Navbar from "./components/navbar";






function App() {
  const [doctorName, setDoctorName] = useState<string>("");
  return (
    <div className="App ">
       
      <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/randevu" element={<Randevu doctorName={doctorName} />} />
        <Route path="/doctors" element={<Doctors setDoctorName={setDoctorName} />} />
        <Route path="/about" element={<About />} />
        
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
