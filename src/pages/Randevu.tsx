import React from 'react';
import Info from "../components/ınfo";
import Calender from "../components/calendar";
import Appointment from "../components/appointments";
import Navbar from "../components/navbar"; // Navbar bileşenini ekleyin

const Randevu:React.FC = () => {
  return (
    
     
      <div className='grid grid-cols-1   my-5'>
        <Info />
        <Appointment />
      </div>
    
  );
};

export default Randevu;
