import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const loginUserSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setLoginUser } = loginUserSlice.actions;
export default loginUserSlice.reducer;
