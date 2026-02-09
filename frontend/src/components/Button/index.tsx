import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, className, href, onClick, iconLeft, iconRight, ...props }) => {
  const Component = href ? "a" : "button"

  return (
    <Component
      className={`${styles.btn} ${className}`}
      href={href}
      onClick={onClick}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Component>
  );
}

export default Button;
// import "./index.css";

// function Button({ children, className, style, iconLeft, iconRight, onClick, ...passProps }) {
//   let classes = className;

//   const props = {
//     className: classes,
//     style,
//     onClick,
//     ...passProps,
//   };

//   return (
//     <button
//       {...props}
//     >
//       {iconLeft}
//       {children}
//       {iconRight}
//     </button>
//   );
// }

// export default Button;
