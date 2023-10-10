import React from 'react';
import { useSelector } from 'react-redux';
import {  RootState  } from '../redux/store';
import Table from "../components/table";

const Appointments: React.FC = () => {
  

  return (
    <div className= "flex justify-center items-center">
      <Table/>
      
    </div>
  );
};

export default Appointments;
