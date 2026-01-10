import { Link } from "react-router-dom";
import "./index.css"

const LinkTo = ({ path, children }) => {
  return (
    <Link className="link" to={path}>
      {children}
    </Link>
  );
}

export default LinkTo;
