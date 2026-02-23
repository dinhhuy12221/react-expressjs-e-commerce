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
  const [counter, setCounter] = useState(value);
  
  const decrease = () => {
    const newValue = Math.max(1, counter - 1);
    // onChange(newValue)
    setCounter(newValue)
  };
  const increase = () => {
    const newValue = Math.min(stock, counter + 1);
    // onChange(newValue)
    setCounter(newValue)
  };
  
  const changeQuantity = (changedValue) => {
    if (1 < stock && counter < stock) {
      // onChange(value);
      setCounter(changedValue)
    }
  };

  return (
    <div className="quantity-box">
      <button className="btn btn--rounded" onClick={() => decrease()}>
        <FaMinus />
      </button>
      <input
        disabled
        value={counter}
        onChange={(e) => changeQuantity(e.target.value)}
      />
      <button className="btn btn--rounded" onClick={() => increase()}>
        <FaPlus />
      </button>
    </div>
  );
}
