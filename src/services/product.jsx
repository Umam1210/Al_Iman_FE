import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./API";

export const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  const response = await API.get('products');
  return response.data;
});

export const getProductById = createAsyncThunk('products/getProductById', async (productId) => {
  const response = await API.get(`product/${productId}`);
  return response.data;
});

export const getProductByIdUser = createAsyncThunk('productUser/getProductByIdUser', async (userId) => {
  const response = await API.get(`user/${userId}`);
  return response.data;
});

export const deleteProduct = createAsyncThunk('delete/deleteProduct', async (productId) => {
  await API.delete(`products/${productId}`);
  return productId;
});

export const addProduct = createAsyncThunk('addProduct', async (product) => {
  const response = await API.post('addProduct', product);
  return response.data;
});

export const editProduct = createAsyncThunk('editProduct', async ({ productId, updatedProduct }) => {
  const response = await API.put(`editProduct/${productId}`, updatedProduct);
  return response.data;
});
