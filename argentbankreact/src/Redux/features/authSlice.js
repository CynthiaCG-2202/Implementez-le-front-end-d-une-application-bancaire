import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token") || sessionStorage.getItem("token");

const initialState = {
  isLoggedIn: !!token,
  token: token || null,
  user: null, // { firstName, lastName, accounts }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
