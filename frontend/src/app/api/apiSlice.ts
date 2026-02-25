import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "~/features/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4002/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    try {
      const state = getState() as RootState
      const accessToken = state.auth.accessToken;
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
});

const baseQueryWithReauth : BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  try {
    let result = await baseQuery(args, api, extraOptions);


    if (result?.error?.status === 403 || result?.error?.status === 401) {
      // console.log("sending refresh token");
      // Send refresh token to get new access token
      const refreshResult = await baseQuery(
        "/auth/customer/refresh",
        api,
        extraOptions
      );
      // console.log(refreshResult);
      if (refreshResult?.data) {
        // store the new token
        api.dispatch(setCredentials({ ...refreshResult.data as any }));
        // retry the original query with new access token
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logOut());
      }
    }
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Customer', 'Cart', 'Order'],
  endpoints: (builder) => ({}),
});
