import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { customerId: null, accessToken: null, isAuthenticated: false },
  reducers: {
    setCredentials: (state, action) => {
      const { customerId, accessToken } = action.payload;
      state.customerId = customerId
      state.accessToken = accessToken
      state.isAuthenticated = true
    },
    logOut: (state) => {
      state.customerId = null;
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentCustomerId = (state) => state.auth.customerId;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
