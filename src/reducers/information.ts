// infoSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InfoItem {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  date: Date | null;
  time: string;
  doctorName:string;
}

interface InfoState {
  infoItems: InfoItem[];
}

const initialState: InfoState = {
  infoItems: [],
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    addInfo: (state, action: PayloadAction<InfoItem>) => {
      // Diğer alanları eklerken, sadece doctorName'i güncelleyin
      const newItem = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phoneNumber: action.payload.phoneNumber,
        date: action.payload.date,
        time: action.payload.time,
        doctorName: action.payload.doctorName, 
      };
      state.infoItems.push(newItem);
    },
    
    deleteInfo: (state, action: PayloadAction<number>) => {
      
      state.infoItems.splice(action.payload, 1);
    },
  },
});

export const { addInfo, deleteInfo } = infoSlice.actions;
export default infoSlice.reducer;
