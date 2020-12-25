import React from "react";
import useStyles from "./styles";

import Menu from "../../../components/Menu";

const LayoutWithMenu = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => {
  const classes = useStyles();
  return (
    <>
      <Menu />
      <div className="jumbotron">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className={className}>{children}</div>
    </>
  );
};
export default LayoutWithMenu;
