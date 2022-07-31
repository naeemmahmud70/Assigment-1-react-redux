import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const allRegisterUserSlice = createSlice({
  name: "allRegisterUser",
  initialState,
  reducers: {
    setAllRegisterUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setAllRegisterUser } = allRegisterUserSlice.actions;
export default allRegisterUserSlice.reducer;
