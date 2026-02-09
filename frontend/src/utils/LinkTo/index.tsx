import React from "react";

import { Link } from "react-router-dom";
import "./index.css"

type Props = {
  path?: string,
  children: any,
  className?: string
}

const LinkTo = ({ path, children, className }: Props) => {
  return (
    <Link className="link" to={path}>
      {children}
    </Link>
  );
}

export default LinkTo;
