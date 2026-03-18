import "./index.css";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="loading-screen">
      <CircularProgress />
    </div>
  );
};

export default Loading;
