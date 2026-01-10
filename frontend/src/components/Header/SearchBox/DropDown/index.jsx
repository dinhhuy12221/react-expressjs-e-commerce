import { memo } from "react";
import ResultItem from "../ResultItem";
import LoadingAnimation from "../../../LoadingAnimation";
import "./index.css";

const list = Array(10).fill({
  title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
  image:
    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60.jpg",
});

function DropDown({ ref }) {
  return (
    <div ref={ref} className="search-result">
      <LoadingAnimation time={800}>
        {list.map((item, index) => (
          <ResultItem key={index} item={item}></ResultItem>
        ))}
      </LoadingAnimation>
    </div>
  );
}

export default memo(DropDown);
