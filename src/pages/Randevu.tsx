import React from 'react';
import Info from "../components/ınfo";
import Calender from "../components/calendar";
import Appointment from "../components/appointments";
import Navbar from "../components/navbar"; 

interface DoctorsProps {
  doctorName: string ;
}

const Randevu:React.FC<DoctorsProps> = ({doctorName}) => {
  return (
    
     
      <div className='grid grid-cols-1   my-5'>
        <Info  doctorName={doctorName} />
        <Appointment />
      </div>
    
  );
};

export default Randevu;
