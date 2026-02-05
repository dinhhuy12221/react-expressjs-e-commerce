import reviews_list from "./reviews_list";
import "./index.css";
import Item from "./Item";
import ReviewFilter from "./ReviewFilter";
import PaginationSection from "../../../components/PaginationSection";
function ProductReview({ title }) {

  // const ShowMore = () => {
  //   return (
  //     <>
  //       <MdKeyboardDoubleArrowDown />Show more
  //     </>
  //   );
  // };
  // const ShowLess = () => {
  //   return (
  //     <>
  //       <MdKeyboardDoubleArrowUp />Show less
  //     </>
  //   );
  // };

  // const showReviewNumber = () => {
  //   return (show ? 10 : 3);
  // }

  // const handleShow = () => {
  //   setShow(!show);
  // }

  return (
    <div className="row product-reviews">
      <h5 className="p-3">REVIEWS</h5>
      
      <ReviewFilter />

      {reviews_list.map((review, index) => (
        <Item index={index} review={review} />
      ))}
      
      <PaginationSection />

    </div>
  );
}

export default ProductReview;
