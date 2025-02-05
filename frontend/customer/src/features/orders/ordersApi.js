import { apiSlice } from "../../app/api/apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints(
    {
        endpoints: builder => ({
            getOrderByCustomer: builder.query({
                query: id => ({
                    url: `/order/order_by_customer/${id}`,
                    method: "GET",
                })
            })
        })
    }
)