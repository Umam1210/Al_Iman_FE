import { createSlice } from "@reduxjs/toolkit";
import { addVoucher, deleteVoucher, editVoucher, getAllVouchers, getVoucherById, getVoucherByIdUser, giveVoucher, searchVoucher } from "../services/voucher";


const initialState = {
    vouchers: [],
    voucher: null,
    voucherUser: [],
    searchVoucher: [],
    loading: false,
    error: null
};

const voucherSlice = createSlice({
    name: "vouchers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllVouchers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllVouchers.fulfilled, (state, action) => {
                state.loading = false;
                state.vouchers = action.payload;
            })
            .addCase(getAllVouchers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getVoucherById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getVoucherById.fulfilled, (state, action) => {
                state.loading = false;
                state.voucher = action.payload;
            })
            .addCase(getVoucherById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteVoucher.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteVoucher.fulfilled, (state, action) => {
                state.loading = false;
                // Hapus voucher dengan voucherId dari state.vouchers
                state.vouchers = state.vouchers.filter((voucher) => voucher.id !== action.payload);
            })
            .addCase(deleteVoucher.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addVoucher.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addVoucher.fulfilled, (state, action) => {
                state.loading = false;
                state.vouchers.push(action.payload);
            })
            .addCase(addVoucher.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(editVoucher.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editVoucher.fulfilled, (state, action) => {
                state.loading = false;
                // Cari dan update voucher dengan voucherId di state.vouchers
                const index = state.vouchers.findIndex((voucher) => voucher.id === action.payload.id);
                if (index !== -1) {
                    state.vouchers[index] = action.payload;
                }
            })
            .addCase(editVoucher.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(searchVoucher.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchVoucher.fulfilled, (state, action) => {
                state.loading = false;
                state.searchVoucher = action.payload;
            })
            .addCase(searchVoucher.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getVoucherByIdUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getVoucherByIdUser.fulfilled, (state, action) => {
                state.loading = false;
                state.voucherUser = action.payload;
            })
            .addCase(getVoucherByIdUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(giveVoucher.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(giveVoucher.fulfilled, (state, action) => {
                state.loading = false;
                state.vouchers.push(action.payload);
            })
            .addCase(giveVoucher.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default voucherSlice.reducer
