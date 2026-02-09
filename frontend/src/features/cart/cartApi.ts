import { apiSlice } from "~/app/api/apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCartByCustomer: builder.query({
            query: (id) => ({
                url: `/cart/by_customer/${id}`,
                method: "GET",
            })
        }),
        createCart: builder.mutation({
            query: (data) => ({
                url: "/cart/create",
                method: "POST",
                body: { ...data },
            })
        })
    })
})

export const { useGetCartByCustomerQuery, useCreateCartMutation } = cartApiSlice;