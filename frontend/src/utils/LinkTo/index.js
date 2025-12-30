import { Link } from "react-router-dom";
import "./index.css"

function LinkTo({ path, children }) {
  return (
    <Link className="link" to={path}>
      {children}
    </Link>
  );
}

export default LinkTo;
