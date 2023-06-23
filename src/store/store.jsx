import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import tokenSlice from './tokenSlice';
import productsSlice from './productsSlice';
import userSlice from './userSlice';
import voucherSlice from './voucherSlice';
import orderSlice from './orderSlice';



export const store = configureStore({
  reducer: {
    auth: authSlice,
    me: tokenSlice,
    product: productsSlice,
    user: userSlice,
    voucher: voucherSlice,
    orders: orderSlice
  }
});
