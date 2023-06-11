import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import tokenSlice from './tokenSlice';
import productsSlice from './productsSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice,
    me: tokenSlice,
    product: productsSlice
  }
});
