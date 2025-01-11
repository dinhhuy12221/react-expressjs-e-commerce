import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

function LoadingAnimation({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <>
      {loading ? <div className="loading"><CircularProgress /></div> : <>{children}</>}
    </>
  );
}

export default LoadingAnimation;
