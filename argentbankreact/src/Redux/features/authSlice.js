import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token") || sessionStorage.getItem("token");
const storedUser = localStorage.getItem("user");

const initialState = {
  isLoggedIn: !!token,
  token: token || null,
  user: storedUser ? JSON.parse(storedUser) : null, // reload si existe
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;

      // Sauvegarde dans le storage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;

      // Nettoyage storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      sessionStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
