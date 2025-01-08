import Button from "@mui/material/Button";
import { useContext } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { MyContext } from "../../../../App";
import "./index.css";
import LinkTo from "../../../../utils/LinkTo";

function ResultItem(props) {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  const item = props.item;

  return (
    <div className="result-item">
      <div className="info">
        <LinkTo path={"/product/1"}>
          <img src={item.image} alt="image" />
        </LinkTo>
        <LinkTo path={"/product/1"}>
          <p>{item.title}</p>
        </LinkTo>
      </div>
      <div className="actions">
        <Button onClick={() => viewProductDetails(1)}>
          <AiOutlineFullscreen />
        </Button>
        <Button>
          <IoMdHeartEmpty />
        </Button>
      </div>
    </div>
  );
}

export default ResultItem;
