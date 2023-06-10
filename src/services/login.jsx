import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./API";
// import axios from "axios";

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        const response = await API.post('login', user);
        const data = response.data;

        // Simpan userRole di localStorage
        localStorage.setItem('userRole', data.userRole);

        return data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        } else {
            throw error;
        }
    }
});

export const getMe = createAsyncThunk('me/login', async (userId, thunkAPI) => {
    try {
        const response = await API.get(`getToken/${userId}`)
        return response.data.token
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        } else {
            throw error;
        }
    }
}) 