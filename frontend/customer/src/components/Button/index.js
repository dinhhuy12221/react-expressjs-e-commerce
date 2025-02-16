import "./index.scss";

function Button({ children, className, style, iconLeft, iconRight, onClick }) {
  let classes = className;

  const props = {
    className: classes,
    style,
    onClick,
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
