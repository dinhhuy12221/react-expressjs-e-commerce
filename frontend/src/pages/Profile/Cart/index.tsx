import React, { useContext, useEffect, useState } from "react";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

import { useGetCartByCustomerQuery } from "~/features/cart/cartApi";
import { useSelector } from "react-redux";
import { RootState } from "~/app/store";
import "./index.css";
import { MyContext } from "~/App";

const Cart = () => {
  const { setIsLoading } = useContext(MyContext)
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const customerId = useSelector((state: RootState) => state.auth.customerId);
  const { data, isLoading } = useGetCartByCustomerQuery(customerId);
  const carts = data ?? [];

  useEffect(() => {
    setIsLoading(isLoading)
  }, [isLoading])

  return (
    <section className="profile-cart">
      <div className="profile-cart-header">
        <h2 className="profile-cart-header-title">Your Cart</h2>
        <hr />
      </div>
      <div className="profile-cart-content">
        <table className="profile-cart-content-table">
          <thead className="profile-cart-content-table-head">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="profile-cart-content-table-body">
            <CartList
              carts={carts}
              customerId={customerId}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />
          </tbody>
        </table>
        {carts && <CartTotal customerId={customerId} carts={carts} selectedIds={selectedIds} />}
      </div>
    </section>
  );
};

export default Cart;
