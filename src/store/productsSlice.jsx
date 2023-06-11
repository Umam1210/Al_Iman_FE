import { createSlice } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, editProduct, getAllProducts, getProductById, getProductByIdUser } from "../services/product";

const initialState = {
    products: [],
    selectedProduct: null,
    userProducts: [],
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
            .addCase(editProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(editProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                const { productId, updatedProduct } = action.payload;
                const index = state.products.findIndex((product) => product.id === productId);
                if (index !== -1) {
                    state.products[index] = updatedProduct;
                }
            })
            .addCase(editProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

// export const { } = productsSlice.actions;

export default productsSlice.reducer;
