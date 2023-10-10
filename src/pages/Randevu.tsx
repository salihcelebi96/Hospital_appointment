import React from 'react';
import Info from "../components/ınfo";
import Calender from "../components/calendar";
import Appointment from "../components/appointments";
import Navbar from "../components/navbar"; // Navbar bileşenini ekleyin

const Randevu = () => {
  return (
    
     
      <div className='grid lg:grid-cols-2 md:grid-cols-1 my-5'>
        <Info />
        <Appointment />
      </div>
    
  );
};

export default Randevu;
