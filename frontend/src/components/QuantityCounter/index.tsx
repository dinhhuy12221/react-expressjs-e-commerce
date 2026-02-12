import React from "react";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import "./index.css";

type Props = {
  value: number;
  stock: number;
  onChange: (value: number) => void;
};

export default function QuantityCounter({ value, onChange, stock }: Props) {
  const decrease = () => onChange(Math.max(1, value - 1));
  const increase = () => onChange(Math.min(stock, value + 1));

  const changeQuantity = (value) => {
    if (1 < stock && stock < stock) {
      onChange(value);
    }
  };

  return (
    <div className="quantity-box">
      <button className="btn btn--rounded" onClick={() => decrease()}>
        <FaMinus />
      </button>
      <input
        disabled
        value={value}
        onChange={(e) => changeQuantity(e.target.value)}
      />
      <button className="btn btn--rounded" onClick={() => increase()}>
        <FaPlus />
      </button>
    </div>
  );
}
