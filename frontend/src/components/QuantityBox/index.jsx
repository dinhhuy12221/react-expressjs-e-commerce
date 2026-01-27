import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import "./index.css";

export default function QuantityBox({ stockQuantity }) {
  const [quantity, setQuantity] = useState(1);

  const minus = () => {
    if (quantity > 1) {
      setQuantity((i) => i - 1);
    }
  };

  const plus = () => {
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
      <button onClick={minus()}>
        <FaMinus />
      </button>
      <input
        type="text"
        value={quantity}
        onChange={(e) => changeQuantity(e.target.value)}
      />
      <button onClick={plus()}>
        <FaPlus />
      </button>
    </div>
  );
}
