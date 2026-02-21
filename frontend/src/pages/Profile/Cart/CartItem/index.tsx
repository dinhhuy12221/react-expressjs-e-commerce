import { Rating } from '@mui/material'
import React from 'react'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import QuantityCounter from '~/components/QuantityCounter'
import { getDiscountPrice } from '~/utils/getDiscountPrice'

const CartItem = ({ product }) => {
  return (
    <tr className="profile-page-cart-content-table-body-row">
          <td>
            <div className="profile-page-cart-content-table-body-row-selector">
              <input
                type="checkbox"
                value={product.cartId}
                checked={selectedIds.includes(product.cartId)}
                onChange={() => toggleProduct(product.cartId)}
              />
            </div>
          </td>
          <td>
            <div className="profile-page-cart-content-table-body-row-info">
              <Link to={`../../product/${product.slug}`}>
                <img
                  className="profile-page-cart-content-table-body-row-info-image"
                  src={product.image}
                />
              </Link>
              <div className="profile-page-cart-content-table-body-row-info-main">
                <h4>{product.name}</h4>
                <Rating
                  className="rating"
                  name="read-only"
                  defaultValue={product.rating}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
          </td>
          <td>
            <div className="profile-page-cart-content-table-body-row-price">
              <span>
                ${getDiscountPrice(product.price, product.discount).toFixed(2)}
              </span>
            </div>
          </td>
          <td>
            <div className="profile-page-cart-content-table-body-row-quantity">
              <QuantityCounter
                value={product.countInCart}
                onChange={() => setProducts}
                stock={product.countInStock}
              />
            </div>
          </td>
          <td>
            <div className="profile-page-cart-content-table-body-row-total-price">
              <span>
                $
                {(
                  product.countInCart *
                  getDiscountPrice(product.price, product.discount)
                ).toFixed(2)}
              </span>
            </div>
          </td>
          <td>
            <div className="profile-page-cart-content-table-body-row-remove">
              <IoClose className="btn btn--primary btn--rounded" />
            </div>
          </td>
        </tr>
  )
}

export default CartItem
