import React, { useState } from "react";
import {
  useGetCartByCustomerQuery,
} from "~/features/cart/cartApi";
import { useSelector } from "react-redux";
import { RootState } from "~/app/store";
import CartItem from "../CartItem";

const CartManager = () => {
  // const [products, setProducts] = useState([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const customerId = useSelector((state: RootState) => state.auth.customerId);
  const { data } = useGetCartByCustomerQuery(customerId);
  const products = data ?? [];

  // const getProductsFromCart = async () => {
  //   const result = await Promise.all(
  //     cart.map(async (item) => {
  //       const tempProduct = await getProductById(item.productId).then(
  //         (res) => res[0]
  //       );
  //       return {
  //         ...tempProduct,
  //         cartId: item._id,
  //         countInCart: item.productCount,
  //       };
  //     })
  //   );

  //   setProducts(result);
  // };

  // const handleUpdateCart = async (
  //   customerId: number,
  //   productId: number,
  //   productCount: number
  // ) => {
  //   setProducts((prev) =>
  //     prev.map((p) =>
  //       p._id === productId ? { ...p, countInCart: productCount } : p
  //     )
  //   );

  //   const payload = {
  //     customerId,
  //     productId,
  //     productCount,
  //   };
  //   await updateCart(payload).unwrap();
  // };

  // useEffect(() => {
  //   getProductsFromCart();
  // }, [cart]);

  if (products.length !== 0) {
    return products.map((product) => (
      <CartItem
        product={product.productId}
        productCount={product.productCount}
        customerId={customerId}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    ));
  }
};

export default CartManager;
