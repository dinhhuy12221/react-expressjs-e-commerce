import { apiSlice } from "~/app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/customer/login',
                method: 'POST',
                body: { ...credentials },
            })
        }),
        logout: builder.mutation({
            query: credentials => ({
                url: '/auth/customer/logout',
                method: 'POST',
            })
        }),
        register: builder.mutation({
            query: data => ({
                url: '/account/customer/create',
                method: "POST",
                body: { ...data },
            })
        }),
        verify: builder.mutation({
            query: () => ({
                url: '/auth/verify',
                method: 'POST',
                body: {},
            })
        })
    })
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useVerifyMutation,
} = authApiSlice;
