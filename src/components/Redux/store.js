import { configureStore } from "@reduxjs/toolkit";
import allRegisterUserSlice from "./Slices/allregisteredUsersSlice";
import loginUserSlice from "./Slices/loginUserSlice";
import registerUserSlice from "./Slices/registerUserSlice";

export const store = configureStore({
  reducer: {
    loginUser: loginUserSlice,
    registerUser: registerUserSlice,
    allRegisterUser: allRegisterUserSlice,
  },
});
