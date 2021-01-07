import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Toggle from "components/Toggle/Toggle";
import { links } from "core/Links";

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -20,
    opacity: 0,
  },
};

const ulVariants = {
  open: {
    scale: 1.0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
  closed: {
    scale: 1.1,
  },
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
      <motion.ul variants={ulVariants}>
        {links.map(({ name, to }) => {
          return (
            <motion.li variants={liVariants}>
              <StyledLink key={to} isActive={pathname === to} to={to}>
                {name}
              </StyledLink>
            </motion.li>
          );
        })}
      </motion.ul>

      <Toggle isActive={id === "dark"} onToggle={setTheme} />
    </>
  );
};
export default MenuItems;
