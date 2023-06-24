import { createSlice } from "@reduxjs/toolkit";
import { deleteUserById, editUserById, getAllUsers, getUserById, registerUser, searchUser } from "../services/user";


const initialState = {
    users: [],
    user: null,
    searchUser: [],
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getUserById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(editUserById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(editUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteUserById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUserById.fulfilled, (state, action) => {
                state.loading = false;
                // Hapus pengguna dengan userId dari state.users
                state.users = state.users.filter((user) => user.id !== action.payload);
            })
            .addCase(deleteUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.User; // Akses data user dari action.payload.User
                console.log(action.payload.message);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
            })

            .addCase(searchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.searchUser = action.payload;
            })
            .addCase(searchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default userSlice.reducer;
