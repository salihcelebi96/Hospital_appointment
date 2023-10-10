// infoSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InfoItem {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  date: Date | null;
  time: string;
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
      state.infoItems.push(action.payload);
    },
    deleteInfo: (state, action: PayloadAction<number>) => {
      
      state.infoItems.splice(action.payload, 1);
    },
  },
});

export const { addInfo, deleteInfo } = infoSlice.actions;
export default infoSlice.reducer;
