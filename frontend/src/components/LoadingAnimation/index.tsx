import React from "react";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const LoadingAnimation = ({ time, children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, time);
  }, []);
  return (
    <>
      {loading ? <div className="loading"><CircularProgress /></div> : <>{children}</>}
    </>
  );
}

export default LoadingAnimation;
