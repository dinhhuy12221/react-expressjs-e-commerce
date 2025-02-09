import './index.css'
import { getOrdersByCustomerQuery } from '../../../../features/orders/ordersApi';

function Orders() {
    const [ordersByCustomer, { isLoading }] = getOrdersByCustomerQuery();

    const tagLiOfOrders = () => {
        return ordersByCustomer.map((order, index) => {
            <li key={index}>{order.product_id}</li>
        })
    }

    return ( <div className="orders-section">
        <ul>
            <li></li>
        </ul>
    </div> );
}

export default Orders;