import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./API";

export const getAllOrders = createAsyncThunk('orders/getAllOrders', async () => {
    const response = await API.get('orders');
    return response.data;
});

export const getOrderById = createAsyncThunk('orders/getOrderById', async (orderId) => {
    const response = await API.get(`order/${orderId}`);
    return response.data;
});

export const getOrderByIdUser = createAsyncThunk('orderUser/getOrderByIdUser', async (userId) => {
    const response = await API.get(`orderUser/${userId}`);
    return response.data;
});

export const getOrderByIdPelapak = createAsyncThunk('orderUser/getOrderByIdUser', async (pelapakId) => {
    const response = await API.get(`orderPelapak/${pelapakId}`);
    return response.data;
});

export const addOrder = createAsyncThunk('orders/addOrder', async (order) => {
    try {
        const response = await API.post('orders', order);
        return response.data;
    } catch (error) {
        throw new Error('Failed to add order');
    }
});

export const updateOrder = createAsyncThunk('orders/updateOrder', async ({ orderId, data }) => {
    const response = await API.put(`editOrder/${orderId}`, data);
    return response.data;
});

export const deleteOrder = createAsyncThunk('orders/deleteOrder', async (orderId) => {
    await API.delete(`orders/${orderId}`);
    return orderId;
});
