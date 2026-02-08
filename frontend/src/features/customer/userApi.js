import { apiSlice } from "~/app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => ({
        url: "/user/get",
        method: "GET",
        body: { id },
      }),
    }),
    updateUser: builder.mutation({
      query: data => ({
        url: "/user/update",
        method: "PUT",
        body: { ...data },
      }),
    }),
  }),
});

export const { useGetCustomerQuery, useUpdateCustomerMutation } = userApiSlice;
