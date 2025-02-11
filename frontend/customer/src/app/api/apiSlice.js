import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4002/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    try {
      const accessToken = getState().auth.accessToken;
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    } catch (error) {
      return error;
    }
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  try {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.originalStatus === 403 || result?.error?.originalStatus === 401) {
      // console.log("sending refresh token");
      // Send refresh token to get new access token
      const refreshResult = await baseQuery(
        "/auth/customer/refresh",
        api,
        extraOptions
      );
      // console.log(refreshResult);
      if (refreshResult?.data) {
        const username = api.getState().auth.username;
        // store the new token
        api.dispatch(setCredentials({ ...refreshResult.data, username }));
        // retry the original query with new access token
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logOut());
      }
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
