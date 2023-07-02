import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./API";

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        const response = await API.post('login', user);
        const data = response.data[0];

        const userArray = [
            { role: data.user.userRole },
            { access: data.user.userId },
            { name: data.user.userName },
            { isLogin: true },
            { key: data.token }
        ];
        localStorage.setItem('userData', JSON.stringify(userArray));

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

export const logout = createAsyncThunk("user/logout", async (_, { rejectWithValue }) => {
    try {
        const response = await API.post("logout");
        response.statusText
        // Hapus data dari localStorage atau cookie yang relevan
        localStorage.clear()
        window.location.reload()
        return null;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});