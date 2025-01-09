import reviews_list from "./reviews_list";
import { Rating } from "@mui/material";
import './index.css'
function ProductReview({ title }) {
  return (
    <div className="row product-reviews">
      <h5 className="p-3">{title}</h5>

      {reviews_list.map((review, index) => (
        <div className="review">
          <div className="info">
            <img className="image" src={review.profile_image} />
            <span className="username">{review.username}</span>
          </div>
          <div className="content">
            <Rating value={review.rating} precision={0.5} readOnly/>
            <p>{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductReview;
