import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { username: null, accessToken: null },
  reducers: {
    setCredentials: (state, action) => {
      const { username, accessToken } = action.payload;
      
      state.username = username;
      state.accessToken = accessToken;
    },
    logOut: (state, action) => {
      state.username = null;
      state.accessToken = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.username;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
