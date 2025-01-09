import reviews_list from "./reviews_list";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import "./index.css";
import Review from "./Review";
import { useState } from "react";
import { Button } from "@mui/material";
function ProductReview({ title }) {
  const [show, setShow] = useState(false);

  const ShowMore = () => {
    return (
      <>
        <MdKeyboardDoubleArrowDown />Show more
      </>
    );
  };
  const ShowLess = () => {
    return (
      <>
        <MdKeyboardDoubleArrowUp />Show less
      </>
    );
  };

  return (
    <div className="row product-reviews">
      <h5 className="p-3">{title}</h5>

      {reviews_list.map((review, index) => index < 3 && (
        <Review index={index} review={review} />
      ))}
      <div className="show-more">
        <Button className="btn-round btn-red">
          {show ? ShowLess() : ShowMore()}
        </Button>
      </div>
    </div>
  );
}

export default ProductReview;
