import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const registerUserSlice = createSlice({
  name: "registeredUser",
  initialState,
  reducers: {
    setRegisterUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setRegisterUser } = registerUserSlice.actions;
export default registerUserSlice.reducer;
