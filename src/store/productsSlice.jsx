import { createSlice } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, editProductById, getAllProducts, getProductById, getProductByIdUser, searchProduct, searchProductPelapak } from "../services/product";

const initialState = {
    products: [],
    selectedProduct: null,
    userProducts: [],
    searchProduct: [],
    isLoading: false,
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(getProductById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(getProductByIdUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getProductByIdUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userProducts = action.payload;
            })
            .addCase(getProductByIdUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = state.products.filter((product) => product.id !== action.payload);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(addProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products.push(action.payload);
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(editProductById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(editProductById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload
            })
            .addCase(editProductById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(searchProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(searchProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.searchProduct = action.payload;
            })
            .addCase(searchProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            .addCase(searchProductPelapak.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(searchProductPelapak.fulfilled, (state, action) => {
                state.isLoading = false;
                state.searchProduct = action.payload;
            })
            .addCase(searchProductPelapak.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    },
});

// export const { } = productsSlice.actions;

export default productsSlice.reducer;
