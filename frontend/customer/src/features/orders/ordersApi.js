import { apiSlice } from "../../app/api/apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints(
    {
        endpoints: builder => ({
            getOrdersByCustomer: builder.query({
                query: id => ({
                    url: `/orders/order_by_customer/${id}`,
                    method: "GET",
                })
            })
        })
    }
)

export const { getOrdersByCustomerQuery } = ordersApiSlice;