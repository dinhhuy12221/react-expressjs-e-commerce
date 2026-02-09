import React from "react";

import { Rating } from "@mui/material";
import './index.css'

function Item({ review, index }) {
  return (
    <section key={index} className="review-item">
      <div className="review-item-header">
        <img className="review-item-header-profile-picture" src={review.profile_image} />
        <span className="review-item-header-username">{review.username}</span>
        <span className="review-item-header-date">{review.date}</span>
      </div>
      <div className="review-item-content">
        <Rating className="review-item-content-rating" value={review.rating} precision={0.5} readOnly />
        <p className="review-item-content-description">{review.review}</p>
      </div>
    </section>
  );
}

export default Item;
