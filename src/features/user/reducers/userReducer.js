import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, updateUser } from "../actions/userThunks";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Create
      .addCase(updateUser.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

  },
});

export default userSlice.reducer;
