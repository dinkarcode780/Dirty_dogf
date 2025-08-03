import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/product/index"; // index.js exports reducer
import {userReducer} from "../features/user/index"

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});
