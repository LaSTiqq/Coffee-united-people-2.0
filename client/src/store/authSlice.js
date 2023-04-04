import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  email: localStorage.getItem("email") || "",
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
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = "";
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("email");
      Cookies.remove("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
