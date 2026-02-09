import review_dummies from "./review_dummies";
import Item from "./Item";
import Filter from "./Filter";
import PaginationSection from "~/components/PaginationSection";
import "./index.css";

const Review = () => {
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

  const List = () => {
    if (review_dummies === null) return null;
    return (
      <>
        {review_dummies.map((item, index) => (
          <Item review={item} index={index} />
        ))}
      </>
    );
  };

  return (
    <div className="product-review">
      <h3 className="product-review-title">REVIEWS</h3>
      <Filter />
      <List />
      <PaginationSection />
    </div>
  );
};

export default Review;
