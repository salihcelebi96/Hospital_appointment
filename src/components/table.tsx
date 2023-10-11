import React from 'react';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import {deleteInfo} from "../reducers/information";
import { useDispatch } from 'react-redux';

const Table: React.FC = () => {
  
  const infoItems = useSelector((state: RootState) => state.information.infoItems);
  const dispatch = useDispatch();

    const handleDelete = (index: number) => {
    dispatch(deleteInfo(index));
  };
  

  
  const tableRows = infoItems.map((item, index) => (
    <React.Fragment key={index}>
      <tr className="h-10 mt-5">
        <td className='text-center'>{item.firstName}</td>
        <td className='text-center'>{item.lastName}</td>
        <td className='text-center'>{item.phoneNumber}</td>
        <td className='text-center'>{item.date ? item.date.toLocaleString() : 'Tarih bilgisi yok'}</td>
        <td className='text-center'>{item.time}</td>
        <td className='bg-red-600 hover:bg-red-400 cursor-pointer  text-white text-center  ' onClick={() => handleDelete(index)}>Delete</td>
      </tr>
      {index < infoItems.length - 1 && (
        <tr className="border-t border-gray-300"></tr>
      )}
    </React.Fragment>
  ));
  
  

  const tableHeader = (
    <tr >
      <th>First Name </th>
      <th>Last Name</th>
      <th>Phone Number</th>
      <th>Date</th>
      <th className=''>Time</th>
    </tr>
  );

  return (
    <div className="w-full mx-5  flex justify-center items-center "> 
      <div className= "h-[600px]  ">
      
      <table className='lg:w-[700px] md:w-[600px] sm:w-[500px] xs:w-[400px]'>

        <thead className='border h-10'>
          {tableHeader}
        </thead>
        <tbody className='border '>
          {tableRows}
        </tbody>
      </table>
      
    </div>
    </div>
   
  );
};

export default Table;