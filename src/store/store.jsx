import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import tokenSlice from './tokenSlice';
import productsSlice from './productsSlice';
import userSlice from './userSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice,
    me: tokenSlice,
    product: productsSlice,
    user: userSlice
  }
});
