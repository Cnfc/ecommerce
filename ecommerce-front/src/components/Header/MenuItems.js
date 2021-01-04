import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";

import Toggle from "components/Toggle/Toggle";

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: ${(p) => p.theme.bodyFontColor};
`;
const MenuItems = () => {
  const { pathname } = useLocation();
  const { id, setTheme } = useContext(ThemeContext);
  return (
    <>
      <StyledLink isActive={pathname === "/"} to="/">
        Home
      </StyledLink>
      <StyledLink isActive={pathname === "/login"} to="/login">
        Login
      </StyledLink>
      <StyledLink isActive={pathname === "/animation"} to="/animation">
        animation
      </StyledLink>

      <Toggle isActive={id === "dark"} onToggle={setTheme} />
    </>
  );
};
export default MenuItems;
