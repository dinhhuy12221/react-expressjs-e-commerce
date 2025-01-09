import { Rating } from "@mui/material";
import './index.css'

function Review({ review, index }) {
  return (
    <div key={index} className="review">
      <div className="info">
        <img className="image" src={review.profile_image} />
        <span className="username">{review.username}</span>
      </div>
      <div className="content">
        <Rating value={review.rating} precision={0.5} readOnly />
        <p>{review.review}</p>
      </div>
    </div>
  );
}

export default Review;
