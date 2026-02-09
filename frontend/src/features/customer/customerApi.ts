import { apiSlice } from "~/app/api/apiSlice";

export const customerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomer: builder.query({
      query: (id) => ({
        url: `/customer/get/${id}`,
        method: "GET",
      }),
      providesTags: ["Customer"],
    }),
    updateCustomer: builder.mutation({
      query: (data) => ({
        url: "/customer/update",
        method: "PUT",
        body: { ...data },
      }),
      invalidatesTags: ["Customer"],
    }),
  }),
});

export const { useGetCustomerQuery, useUpdateCustomerMutation } = customerApiSlice;
