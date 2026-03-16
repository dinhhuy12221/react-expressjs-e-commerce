import React, { useEffect, useState } from 'react'

import "./index.css"
import Breadcrumb from '../../../components/Breadcrumb'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../../api/order'

const OrderDetail = () => {
  const [order, setOrder] = useState<any>(null)
  const { id } = useParams()

  useEffect(() => {
    const handleAsync = async () => {
      const result = await getOrderById(id)
      setOrder(result)

      console.log(result);
      
    }

    handleAsync()
  }, [id])

  if (order === null) return

  return (
    <div className='order-detail'>
      <Breadcrumb path={[
          {
            name: "Orders",
            to: `/orders`,
          },
          {
            name: `${order._id}`,
            to: `/${order._id}`,
          },
        ]} />

        <div className="order-content-item-products">
              {order.products.map((i) => (
                <div className="order-content-item-products-item">
                  <img src={i.id.images[0].url} />
                  <h3 className="order-content-item-products-item-name">
                    Name: {i.id.name}
                  </h3>
                  <h3 className="order-content-item-products-item-count">
                    Numbers: {i.count}
                  </h3>
                  <h3 className="order-content-item-products-item-discount">
                    Discount: {i.discount}%
                  </h3>
                </div>
              ))}
            </div>
    </div>
  )
}

export default OrderDetail
