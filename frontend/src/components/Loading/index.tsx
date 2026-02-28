import React from "react";
import { CircularProgress } from "@mui/material";
import "./index.css"
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <CircularProgress color="success" />
    </div>
  );
};

export default LoadingScreen;
