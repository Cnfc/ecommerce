import React from "react";

import { motion } from "framer-motion";
import styled from "styled-components";
import MenuItems from "components/Header/MenuItems";

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  background-color: ${(p) => p.theme.bodyBackgroundColor};
  padding: 40px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0;
    margin: 0;
    font-size: 2rem;
  }
`;

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <MenuNav
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      transition={{ damping: 300 }}
    >
      <button onClick={() => setIsNavOpen(false)}>Close</button>

      <MenuItems />
    </MenuNav>
  );
};

export default Nav;
