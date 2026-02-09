import { apiSlice } from "~/app/api/apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints(
    {
        endpoints: builder => ({
            getOrdersByCustomer: builder.query({
                query: (id) => ({
                    url: `/orders/orders_by_customer/${id}`,
                    method: "GET",
                })
            }),
            createOrder: builder.mutation({
                query: (data) => ({
                    url: "/order/create",
                    method: "POST",
                    body: { ...data }
                })
            })
        })
    }
)

export const { useGetOrdersByCustomerQuery, useCreateOrderMutation } = ordersApiSlice;