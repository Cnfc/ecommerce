import React from "react";

import Menu from "components/Menu";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  isJumbotronShow = true,
  children,
}) => {
  console.log(isJumbotronShow);
  return (
    <>
      <Menu />
      {isJumbotronShow ? (
        <div className="jumbotron">
          <h2>{title}</h2>
          <p className="lead">{description}</p>
        </div>
      ) : (
        ""
      )}
      <div className={className}>{children}</div>
    </>
  );
};

export default Layout;
