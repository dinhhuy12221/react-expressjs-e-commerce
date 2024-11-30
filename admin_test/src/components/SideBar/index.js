import React from "react";
import DropDownList from "../DropDownList";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sticky-top pt-1">
        <DropDownList />
      </div>
    </div>
  );
}
