import "./index.css";
import ResultItem from "./ResultItem";

const list = Array(10).fill({
  title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
  image:
    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60.jpg",
});

function DropDown() {
  return (
    <div className="search-result">
      {list.map((item, index) => (
        <ResultItem key={index} item={item}></ResultItem>
      ))}
    </div>
  );
}

export default DropDown;
