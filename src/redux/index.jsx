import { configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./reducers/addProductSlice";

export const store = configureStore({
  reducer: {
    add: addProductSlice,
  },
});
