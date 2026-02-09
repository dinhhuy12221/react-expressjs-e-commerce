import React, { useEffect } from "react";
import "./index.scss";

function OptionModal({
  title = "Title",
  content = "Content",
  optionType,
  handleOption,
}) {

  useEffect(() => {
    const handleWindowWheel = (event) => {
        event.preventDefault();
    };

    window.addEventListener("wheel", handleWindowWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWindowWheel);
    };
  }, []);

  const optionalbuttons = () => {
    switch (optionType) {
      case "yes_no":
        return (
          <>
            <button className="btn btn--primary" style={{backgroundColor: "green"}} onClick={() => handleOption(true, true)}>Yes</button>
            <button className="btn btn--primary" style={{backgroundColor: "red"}} onClick={() => handleOption(true, false)}>No</button>
          </>
        );
        default:
        return (
          <>
            <button className="btn btn--outlined" onClick={() => handleOption(true, false)}>Close</button>
          </>
        );

    }
  };

  return (
    <div className="background">
      <div className="option-modal">
        <div className="title">
          <span>{title}</span>
          <hr />
        </div>
        <div className="content">
          <span>{content}</span>
        </div>
        <div className="button">
          {optionalbuttons()}
        </div>
      </div>
    </div>
  );
}

export default OptionModal;
