import { createSlice } from "@reduxjs/toolkit";
import { getOrderById } from "../services/orders";

const initialState = {
    orderUser: [],
    order: null,
    loading: false,
    error: null
};

const orderUserSlice = createSlice({
    name: 'orderUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrderById.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getOrderById.fulfilled, (state, action) => {
            state.orderUser = action.payload;
            state.loading = false;
        });
        builder.addCase(getOrderById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default orderUserSlice.reducer