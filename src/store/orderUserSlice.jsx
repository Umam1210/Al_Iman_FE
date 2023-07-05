import { createSlice } from "@reduxjs/toolkit";
import { getOrderById } from "../services/orders";
import { deleteVoucherUsegeUserById, getAllVouchersUsageByUserId } from "../services/voucher";

const initialState = {
    orderUser: [],
    voucherList: [],
    voucherUserList: [],
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
        })


        builder.addCase(deleteVoucherUsegeUserById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(deleteVoucherUsegeUserById.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            // Menghapus voucher dengan ID yang sesuai dari state voucherList
            state.voucherList = state.voucherList.filter(
                (voucher) => voucher.id !== action.payload
            );
        })
        builder.addCase(deleteVoucherUsegeUserById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        builder.addCase(getAllVouchersUsageByUserId.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllVouchersUsageByUserId.fulfilled, (state, action) => {
            state.voucherUserList = action.payload;
            state.loading = false;
        });
        builder.addCase(getAllVouchersUsageByUserId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default orderUserSlice.reducer