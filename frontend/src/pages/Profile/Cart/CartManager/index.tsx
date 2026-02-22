import React, { useEffect, useState } from "react";
import {
  useGetCartByCustomerQuery,
  useUpdateCartMutation,
} from "~/features/cart/cartApi";
import { useSelector } from "react-redux";
import { RootState } from "~/app/store";
import { CartInt } from "~/features/cart/cart.types";
import { getProductById } from "~/api/product";
import CartItem from "../CartItem";

const CartManager = () => {
  const [products, setProducts] = useState([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const customerId = useSelector((state: RootState) => state.auth.customerId);
  const { data } = useGetCartByCustomerQuery(customerId);
  const [updateCart, { isLoading }] = useUpdateCartMutation();
  const cart: CartInt[] = data ?? [];

  const getProductsFromCart = async () => {
    const result = await Promise.all(
      cart.map(async (item) => {
        const tempProduct = await getProductById(item.product_id).then(
          (res) => res[0]
        );
        return {
          ...tempProduct,
          cartId: item._id,
          countInCart: item.product_count,
        };
      })
    );

    setProducts(result);
  };

  const handleUpdateCart = async (
    customer_id: number,
    product_id: number,
    product_count: number
  ) => {
    setProducts((prev) =>
      prev.map((p) =>
        p._id === product_id ? { ...p, countInCart: product_count } : p
      )
    );

    const payload = {
      customer_id,
      product_id,
      product_count,
    };
    await updateCart(payload).unwrap();
  };

  useEffect(() => {
    getProductsFromCart();
  }, [cart]);

  if (products.length !== 0) {
    // (
    //   <div className="cart-manager">
        return products.map((product) => (
          <CartItem
            product={product}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          />
        ))
    //   </div>
    // );
  }
};

export default CartManager;
