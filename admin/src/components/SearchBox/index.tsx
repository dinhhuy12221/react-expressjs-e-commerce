import { FaSearch } from "react-icons/fa";
import "./index.css"

export default function index() {
  return (
    <div className="searchbox">
      <FaSearch />
      <input type="text" placeholder="Search here..." />
    </div>
  );
}
