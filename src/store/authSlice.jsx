import { createSlice } from "@reduxjs/toolkit";
import { login } from "../services/login";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        user: null,
        error: null,
        isLoading: false,
        isSuccess: false,
        message: null,
    },
    reducers: {
        logout: (state) => {
            state.isLogin = false;
            state.user = null;
            state.error = null;
        },
        setLoginStatus: (state, action) => {
            state.isLogin = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.message = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.payload;
            });
    },
});

export const { logout, setLoginStatus } = authSlice.actions;


export default authSlice.reducer;