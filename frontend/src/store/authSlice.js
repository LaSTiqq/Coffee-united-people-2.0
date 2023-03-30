import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  username: localStorage.getItem("username") || "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", action.payload.username);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "";
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      Cookies.remove("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
