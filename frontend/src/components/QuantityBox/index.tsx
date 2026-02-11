import React from "react";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import "./index.css";

type Props = {
  count: number,
  stock: number,
}

export default function QuantityBox({ count, stock }: Props) {
  const [quantity, setQuantity] = useState(count);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((i) => i - 1);
    }
  };

  const increase = () => {
    if (quantity < stock) {
      setQuantity((i) => i + 1);
    }
  };

  const changeQuantity = (value) => {
    if (1 < quantity && quantity < stock) {
      setQuantity(value)
    }
  };
  
  return (
    <div className="quantity-box">
      <button className="btn btn--rounded" onClick={() => decrease()}>
        <FaMinus />
      </button>
      <input
        disabled
        value={quantity}
        onChange={(e) => changeQuantity(e.target.value)}
      />
      <button className="btn btn--rounded" onClick={() => increase()}>
        <FaPlus />
      </button>
    </div>
  );
}
