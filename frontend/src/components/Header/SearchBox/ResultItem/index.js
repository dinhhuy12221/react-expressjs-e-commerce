import { useContext } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { MyContext } from "../../../../App";
import LinkTo from "../../../../utils/LinkTo/index";
import "./index.css";

function ResultItem(props) {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  const item = props.item;

  return (
    <div className="result-item">
      <div className="result-info">
        <LinkTo path={"/product/1"}>
          <img src={item.image} alt="image" />
        </LinkTo>
        <LinkTo path={"/product/1"}>
          {item.title}
        </LinkTo>
      </div>
      <div className="actions">
        <button className="btn" onClick={() => viewProductDetails(1)}>
          <AiOutlineFullscreen />
        </button>
        <button className="btn">
          <IoMdHeartEmpty />
        </button>
      </div>
    </div>
  );
}

export default ResultItem;
