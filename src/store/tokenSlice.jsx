import { createSlice } from "@reduxjs/toolkit";
import { getMe } from "../services/login";
const initialState = {
    token: '',
    loading: false,
    error: null
}

const tokenSlice = createSlice({
    name: "Me",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMe.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload;
            })
            .addCase(getMe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export default tokenSlice.reducer