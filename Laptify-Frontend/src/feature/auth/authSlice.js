import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("accessToken"),
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  accessToken: localStorage.getItem("accessToken") || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login action
    loginSuccess: (state, action) => {
      const { user, accessToken } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.accessToken = accessToken;
      state.loading = false;
      state.error = null;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
    },
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    // Logout action
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    },
    // Update user info
    updateUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    // Clear error
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { loginSuccess, loginStart, loginFailure, logout, updateUser, clearError } = authSlice.actions;
export default authSlice.reducer;
