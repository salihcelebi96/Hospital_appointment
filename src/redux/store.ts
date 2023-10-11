import { configureStore } from '@reduxjs/toolkit';
import Info from "../reducers/information";
import usernameReducer from '../reducers/doctorsReducers';
import users from "../reducers/allUsersReducers";





const store = configureStore({
  reducer: {
    information:Info,
    username: usernameReducer,
    users:users

  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;
