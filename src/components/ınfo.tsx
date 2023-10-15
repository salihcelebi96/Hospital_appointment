import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from "../components/calendar";
import { addInfo } from "../reducers/information";
import { RootState } from '../redux/store';

const StyledInput = styled.input`
  width: 10rem;
  border: 1px solid #000;
`;

interface ContactFormProps {
  doctorName: string;
}



const ContactForm: React.FC<ContactFormProps > = ({ doctorName}) => {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [phoneNumberInput, setPhoneNumberInput] = useState('');
  const [selectedDated, setSelectedDated] = useState<Date | null>(null);
  const [selectedTimed, setSelectedTimed] = useState<string>('10:00'); 


  
  const dispatch = useDispatch();

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNameInput(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameInput(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumberInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newInfo = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      phoneNumber: phoneNumberInput,
      date: selectedDated, 
      time: selectedTimed, 
      doctorName:doctorName
    };
  
    dispatch(addInfo(newInfo));
  
    console.log(firstNameInput);
    console.log(lastNameInput);
    console.log(phoneNumberInput);
    console.log('Seçilen Tarih:', selectedDated);
    console.log('Seçilen Saat:', selectedTimed);
    
  
    setFirstNameInput('');
    setLastNameInput('');
    setPhoneNumberInput('');

  };

  return (
    <div className='h-full   flex items-center justify-center flex-col  mx-5'>
      <div className='border flex flex-col justify-center items-center    border-gray-600 px-2 py-5 md:w-72  lg:w-96 my-5'>
        <div className='text-2xl text-red-500 mb-2 '>
          <h1>İletişim Bilgileri Formu</h1>
        </div>
        
        <div>
          <form className='flex flex-col justify-center items-center gap-1 ' onSubmit={handleSubmit}>
            
            <Calendar selectedDated={selectedDated} setSelectedDated={setSelectedDated} setSelectedTimed={setSelectedTimed} selectedTimed={selectedTimed} />
            <StyledInput
              type='text'
              placeholder='Ad'
              value={firstNameInput}
              onChange={handleFirstNameChange}
            />
            <StyledInput
              type='text'
              placeholder='Soyad'
              value={lastNameInput}
              onChange={handleLastNameChange}
            />
            <StyledInput
              type='text'
              placeholder='Telefon Numarası'
              value={phoneNumberInput}
              onChange={handlePhoneNumberChange}
            />
            <button className='px-5 w-[102px] bg-green-700 hover:bg-green-600 text-white py-1 my-3'>Kaydet</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
