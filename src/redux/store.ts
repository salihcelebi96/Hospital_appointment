import { configureStore } from '@reduxjs/toolkit';
import Info from "../reducers/information";
import usernameReducer from '../reducers/doctorsReducers';





const store = configureStore({
  reducer: {
    information:Info,
    username: usernameReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;
