// allUsersSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

// Başlangıç durumu
const initialState: User[] = [];

const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    setAllUsers: (state, action: PayloadAction<User[]>) => {
      return action.payload;
    },
  },
});

export const { setAllUsers } = allUsersSlice.actions;
export default allUsersSlice.reducer;
