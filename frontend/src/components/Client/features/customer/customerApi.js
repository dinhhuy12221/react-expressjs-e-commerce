import { apiSlice } from "../../app/api/apiSlice";

export const customerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCustomer: builder.query ({
            query: () => ({
                url: "/customer/:id",
                method: "GET",
            })
        })
    })
})

export const {
    getCustomerQuery
} = customerApi;