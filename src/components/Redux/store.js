import { configureStore } from "@reduxjs/toolkit";
import loginUserSlice from "./Slices/loginUserSlice";

export const store = configureStore({
  reducer: {
    loginUser: loginUserSlice,
  },
});
