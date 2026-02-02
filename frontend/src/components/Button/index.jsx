import "./Button.module.css";

const Button = ({ children, className, variant = "primary", onClick, iconLeft, iconRight }) => {

  const props = {
    
  }
  return (
    <button
      className={className}
      variant={variant}
      onClick={onClick}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
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
