import { apiSlice } from "../../app/api/apiSlice";

export const customerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomer: builder.query({
      query: (id) => ({
        url: "/customer/get",
        method: "GET",
        body: { id }, 
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
