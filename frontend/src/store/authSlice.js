import { createSlice } from "@reduxjs/toolkit";

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
      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem("username");
    },
    checkLoggedInStatus: (state) => {
      state.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      state.username = localStorage.getItem("username") || "";
    },
  },
});

export const { login, logout, checkLoggedInStatus } = authSlice.actions;
export default authSlice.reducer;
