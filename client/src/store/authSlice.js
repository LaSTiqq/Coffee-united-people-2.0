import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  email: localStorage.getItem("email") || "",
  token: Cookies.get("token") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("email", action.payload.email);
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = "";
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("email");
      Cookies.remove("token");
      state.token = null;
    },
    checkToken: (state) => {
      const token = Cookies.get("token");
      if (!token) {
        state.isLoggedIn = false;
        state.email = "";
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("email");
        state.token = null;
      }
    },
  },
});

export const { login, logout, checkToken } = authSlice.actions;
export default authSlice.reducer;
