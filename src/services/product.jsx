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
  await API.delete(`product/${productId}`);
  return productId;
});


export const addProduct = createAsyncThunk('product/addProduct', async (product) => {
  try {
    const response = await API.post('addProduct', product);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add product');
  }
});

export const editProductById = createAsyncThunk('editProduct', async ({ productId, updatedProduct }) => {
  const response = await API.patch(`editProduct/${productId}`, updatedProduct);
  return response.data;
});

export const searchProduct = createAsyncThunk(
  'product/searchProduct',
  async (searchTerm) => {
    try {
      const response = await API.get(`searchProduct?productName=${searchTerm}`);
      return response.data;
    } catch (error) {
      throw new Error('Terjadi kesalahan pada server');
    }
  }
);


export const searchProductPelapak = createAsyncThunk(
  'product/searchProductPelapak',
  async ({ pelapakId, searchTerm }) => {
    try {
      const response = await API.get(`searchProductPelapak/${pelapakId}?productName=${searchTerm}`);
      return response.data;
    } catch (error) {
      throw new Error('Terjadi kesalahan pada server');
    }
  }
);