import React from "react";
import useStyles from "./styles";

import LayoutWithMenu from "../../core/LayoutWithMenu";

const About = () => {
  const classes = useStyles();
  return (
    <LayoutWithMenu title="About" description="About Page">
      <div>About Page</div>
    </LayoutWithMenu>
  );
};
export default About;
