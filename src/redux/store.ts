import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Info from "../reducers/information";
import storage from "redux-persist/lib/storage";
import users from "../reducers/allUsersReducers";
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: "root",
  version: 1,
  storage, 
};

const rootReducer = combineReducers({
  information: Info,
  allUsers: users,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
