import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { addInfo } from "../reducers/information";
import { useDispatch } from 'react-redux';


interface AppointmentSchedulerProps {
  selectedDated: Date | null;
  setSelectedDated: (date: Date | null) => void;
  setSelectedTimed: (time: string) => void;
  selectedTimed: string;
}

const AppointmentScheduler: React.FC<AppointmentSchedulerProps> = (props) => {
  const {
    selectedDated,
    selectedTimed,
    setSelectedDated,
    setSelectedTimed
  } = props;

  const handleDateChange = (date: Date | null) => {
    setSelectedDated(date);
  };

  const handleTimeChange = (time: string | null) => {
    if (time !== null) { 
      setSelectedTimed(time);
    }
  };

  
  return (
    <div>
      <div>
        <h2 className='my-5   text-center'>Randevu Tarihi ve Saati Seçin</h2>
      </div>
      <div className='flex gap-3  my-3'> 
        <div className="border border-red-500">
          <DatePicker
            className='w-32 h-[27px]'
            selected={props.selectedDated}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            isClearable
            placeholderText="Tarih Seçin"
          />
        </div>
        <div>
          <TimePicker
            onChange={handleTimeChange}
            value={props.selectedTimed}
            disableClock={true}
          />
        </div>
        
      </div>
    </div>
  );
};

export default AppointmentScheduler;
