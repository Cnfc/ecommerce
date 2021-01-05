import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";

import Toggle from "components/Toggle/Toggle";
import { links } from "core/Links";

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  font-size: 1.5rem;
  color: ${(p) => p.theme.bodyFontColor};
`;

const MenuItems = () => {
  const { pathname } = useLocation();
  const { id, setTheme } = useContext(ThemeContext);
  return (
    <>
      {links.map(({ name, to }) => {
        return (
          <StyledLink key={to} isActive={pathname === to} to={to}>
            {name}
          </StyledLink>
        );
      })}

      <Toggle isActive={id === "dark"} onToggle={setTheme} />
      {/* // </ul> */}
    </>
  );
};
export default MenuItems;
