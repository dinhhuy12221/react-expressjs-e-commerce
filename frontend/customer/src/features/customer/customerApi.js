import { apiSlice } from "../../app/api/apiSlice";

export const customerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomer: builder.query({
      query: () => ({
        url: "/customer/:id",
        method: "GET",
      }),
    }),
    updateCustomer: builder.mutation({
      query: (info) => ({
        url: "/customer/update",
        method: "PUT",
        body: { ...info },
      }),
    }),
  }),
});

export const { useGetCustomerQuery, useUpdateCustomerMutation } = customerApiSlice;
