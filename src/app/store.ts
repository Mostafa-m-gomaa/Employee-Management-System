import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../features/employeesSlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    auth: authReducer,
  },
});


console.log(typeof store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
