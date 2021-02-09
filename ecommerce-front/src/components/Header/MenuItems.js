import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Toggle from "components/Toggle/Toggle";
import { links } from "layouts/Links";

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const toggleVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
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
        {links.map(({ name, to, id }) => {
          return (
            <motion.li key={id} variants={liVariants}>
              <StyledLink key={to} isActive={pathname === to} to={to}>
                {name}
              </StyledLink>
            </motion.li>
          );
        })}
      </motion.ul>
      <motion.div transition={{ duration: 3 }} variants={toggleVariants}>
        <Toggle isActive={id === "dark"} onToggle={setTheme} />
      </motion.div>
      >
    </>
  );
};
export default MenuItems;
