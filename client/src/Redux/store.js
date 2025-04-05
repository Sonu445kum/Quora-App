import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import questionReducer from './questionSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    question: questionReducer,
  },
});