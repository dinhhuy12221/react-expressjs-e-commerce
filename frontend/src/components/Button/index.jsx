import "./Button.module.css";

const Button = ({ children, className, variant = "primary", href, onClick, iconLeft, iconRight, ...props }) => {
  const Component = href ? "a" : "button"

  return (
    <Component
      className={className}
      href={href}
      variant={variant}
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
