import React from "react";

export default function UserAvatarImg(props) {
  return (
    <div className={`userImg ${props.lg === "true" && "lg"}`}>
      <span className="rounded-circle">
        <img src={props.imgUrl} />
      </span>
    </div>
  );
}
