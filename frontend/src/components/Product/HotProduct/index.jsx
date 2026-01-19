import { getDiscountPrice } from "../../../utils/getDiscountPrice";
import "./index.css";
const HotProduct = ({ product }) => {
  const currentPrice = getDiscountPrice(product.price, product.discount);

  return (
    <div className="hot-product">
      <div className="thumbnail">
        <div className="badge"><span>{product.discount}%</span></div>
        <img src={product.image} alt="NOT FOUND" />
      </div>
      <div className="main">
        <div className="prices">
          <span className="old-price">${product.price}</span>
          <span className="net-price">${currentPrice}</span>
        </div>
        <span className="name">{product.name}</span>
        <span className="status">In Stock</span>
      </div>
    </div>
  );
};

export default HotProduct;
