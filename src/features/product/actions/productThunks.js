import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProductsAPI,
  createProductAPI,
  deleteProductAPI,
} from "../api/productAPI";

export const fetchProducts = createAsyncThunk("product/fetchAll", async () => {
  return await getAllProductsAPI();
});

export const createProduct = createAsyncThunk("product/create", async (product) => {
  return await createProductAPI(product);
});

export const deleteProduct = createAsyncThunk("product/delete", async (id) => {
  return await deleteProductAPI(id);
});
