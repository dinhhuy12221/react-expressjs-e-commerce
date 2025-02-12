import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { customer: null, accessToken: null },
  reducers: {
    setCredentials: (state, action) => {
      const { customer, accessToken } = action.payload;
      
      state.customer = customer;
      state.accessToken = accessToken;
    },
    logOut: (state, action) => {
      state.customer = null;
      state.accessToken = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentCustomer = (state) => state.auth.customer;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
