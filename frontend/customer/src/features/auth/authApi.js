import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/customer/login',
                method: 'POST',
                body: { ...credentials },
            })
        }),
        register: builder.mutation({
            query: registerInfo => ({
                url: '/account/customer/create',
                method: "POST",
                body: { ...registerInfo },
            })
        })
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
} = authApiSlice;
