import { useEffect, useState } from "react";
import Button from "../Button";
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

  const optionalButtons = () => {
    switch (optionType) {
      case "yes_no":
        return (
          <>
            <Button className="medium" style={{backgroundColor: "green"}} onClick={() => handleOption(true, true)}>Yes</Button>
            <Button className="medium" style={{backgroundColor: "red"}} onClick={() => handleOption(true, false)}>No</Button>
          </>
        );
        default:
        return (
          <>
            <Button className="medium"  onClick={() => handleOption(true, false)}>Cancel</Button>
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
          {optionalButtons()}
        </div>
      </div>
    </div>
  );
}

export default OptionModal;
