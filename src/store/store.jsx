import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import tokenSlice from './tokenSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    me: tokenSlice
  }
});
