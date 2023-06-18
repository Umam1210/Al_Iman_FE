import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./API";

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
    const response = await API.get("getAllUsers");
    return response.data;
});

export const getUserById = createAsyncThunk("user/getUserById", async (userId) => {
    const response = await API.get(`getUser/${userId}`);
    return response.data;
});

export const editUserById = createAsyncThunk(
    "user/editUserById",
    async ({ userId, updatedUserData }) => {
        const response = await API.put(`editUser/${userId}`, updatedUserData);
        return response.data;
    }
);


export const deleteUserById = createAsyncThunk("user/deleteUserById", async (userId) => {
    await API.delete(`deleteUser/${userId}`);
    return userId;
});

export const registerUser = createAsyncThunk("user/registerUser", async (userData) => {
    const response = await API.post("user/register", userData);
    return response.data;
});

export const searchUser = createAsyncThunk(
    'user/searchUser',
    async (searchTerm) => {
        try {
            const response = await API.get(`/searchUser?userName=${searchTerm}`);
            return response.data;
        } catch (error) {
            throw new Error('Terjadi kesalahan pada server');
        }
    }
);