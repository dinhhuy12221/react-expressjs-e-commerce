import { createApi, fetchBaseQuery } from "@reduxjs/toolkit";
import { setCredentials, logOut } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4002/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originStatus === 403) {
        console.log('sending refresh token');
        // Send refresh token to get new access token
        const refreshResult = await baseQuery('/auth/customer/refresh', api, extraOptions);
        console.log(refreshResult);
        if (refreshResult?.data) {
            const username = api.getState().auth.username
            // store the new token
            api.dispatch(setCredentials({ ...refreshResult.data, username }))
            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endPoints: builder => ({
        
    })
})