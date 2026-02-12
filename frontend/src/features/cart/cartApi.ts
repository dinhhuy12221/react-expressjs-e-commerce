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
        }),
        updateCart: builder.mutation({
            query: (data) => ({
                url: "/cart/update",
                method: "PUT",
                body: { ...data },
            })
        }),
    })
})

export const { useGetCartByCustomerQuery, useCreateCartMutation, useUpdateCartMutation } = cartApiSlice;