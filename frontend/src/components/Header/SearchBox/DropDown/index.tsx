import React, { memo } from "react";
import ResultItem from "../ResultItem";
import "./index.css";

const list = Array(10).fill({
  title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
  image:
    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60.jpg",
});

type Props = {
  ref?: any
}

function DropDown({ ref }: Props) {
  return (
    <div ref={ref} className="search-result">
        {list.map((item, index) => (
          <ResultItem key={index} item={item}></ResultItem>
        ))}
    </div>
  );
}

export default memo(DropDown);
