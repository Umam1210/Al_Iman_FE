import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./API";

export const getAllVouchers = createAsyncThunk('vouchers/getAllVouchers', async () => {
    const response = await API.get('vouchers');
    return response.data;
});

export const getVoucherById = createAsyncThunk('vouchers/getVoucherById', async (voucherId) => {
    const response = await API.get(`voucher/${voucherId}`);
    return response.data;
});

export const deleteVoucher = createAsyncThunk('vouchers/deleteVoucher', async (voucherId) => {
    await API.delete(`deleteVoucher/${voucherId}`);
    return voucherId;
});

export const addVoucher = createAsyncThunk('vouchers/addVoucher', async (voucher) => {
    const response = await API.post('createVoucher', voucher);
    return response.data;
});

export const editVoucher = createAsyncThunk('vouchers/editVoucher', async ({ voucherId, updatedVoucher }) => {
    const response = await API.put(`editVoucher/${voucherId}`, updatedVoucher);
    return response.data;
});

export const searchVoucher = createAsyncThunk(
    'vouchers/searchVoucher',
    async (searchTerm) => {
        try {
            const response = await API.get(`searchVoucher?voucherName=${searchTerm}`);
            return response.data;
        } catch (error) {
            throw new Error('Terjadi kesalahan pada server');
        }
    }
);
