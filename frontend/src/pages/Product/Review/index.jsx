import reviews_list from "./reviews_list";
import "./index.css";
import Item from "./Item";
import ReviewFilter from "./ReviewFilter";
import PaginationSection from "../../../components/PaginationSection";

const ProductReview = () => {
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

  const ReviewList = () => {
    if (reviews_list == null) return null;
    return (
      <>
        {reviews_list.map((item, index) => (
          <Item review={item} index={index} />
        ))}
      </>
    );
  };

  return (
    <div className="row product-reviews">
      <h5 className="p-3">REVIEWS</h5>
      <ReviewFilter />
      <ReviewList />
      <PaginationSection />
    </div>
  );
};

export default ProductReview;
