import "./index.scss";

function Button({ children, className, style, iconLeft, iconRight, onClick, ...passProps }) {
  let classes = className;

  const props = {
    className: classes,
    style,
    onClick,
    ...passProps,
  };

  return (
    <button
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

export default Button;
