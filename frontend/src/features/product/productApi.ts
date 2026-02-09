import { apiSlice } from "~/app/api/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProductById: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: "GET",
            })
        })
    })
})

export const { useGetProductByIdQuery } = productApiSlice;