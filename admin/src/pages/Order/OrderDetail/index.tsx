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
    </div>
  )
}

export default OrderDetail
