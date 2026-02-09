import React from "react";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import "./index.css";

export default function QuantityBox({ stockQuantity }) {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((i) => i - 1);
    }
  };

  const increase = () => {
    if (quantity < stockQuantity) {
      setQuantity((i) => i + 1);
    }
  };

  const changeQuantity = (value) => {
    if (1 < quantity && quantity < stockQuantity) {
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
