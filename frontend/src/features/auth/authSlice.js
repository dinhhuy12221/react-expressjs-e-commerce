import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { customer: null, accessToken: null },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
    },
    setCustomer: (state, action) => {
      const { customer } = action.payload;
      state.customer = customer;
    },
    logOut: (state, action) => {
      state.customer = null;
      state.accessToken = null;
    },
  },
});

export const { setCredentials, setCustomer, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentCustomer = (state) => state.auth.customer;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
