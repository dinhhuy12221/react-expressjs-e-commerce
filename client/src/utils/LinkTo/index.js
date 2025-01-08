import { Link } from "react-router-dom";

function LinkTo({ path, children }) {
  return (
    <Link to={path} style={{ color: "#333" }}>
      {children}
    </Link>
  );
}

export default LinkTo;
