import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, createProduct, deleteProduct } from "../actions/productThunks";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Create
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Delete
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p._id !== action.payload._id);
      });
  },
});

export default productReducer.reducer;
