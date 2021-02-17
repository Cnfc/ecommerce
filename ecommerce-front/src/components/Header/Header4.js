import React, { useState, useContext } from "react";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { motion } from "framer-motion";
import MediaQuery, { useMediaQuery } from "react-responsive";

import Nav from "components/Nav/Nav";
import MenuSVG from "./MenuSVG";
import MenuItems from "./MenuItems";

// const MenuNav = styled(motion.nav)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vw;
//   background-color: ${(p) => p.theme.bodyBackgroundColor};
//   padding: 40px;

//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   }

//   li {
//     padding: 0;
//     margin: 0;
//     font-size: 2rem;
//     a {
//       color: ${(p) => p.theme.bodyFontColor};
//     }
//   }
// `;

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
`;

const Menu = styled(motion.nav)`
  display: ${(p) => (p.open ? "block" : "none")};
  font-family: "Open Sans";
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  padding: 8px;
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
  background-color: ${(p) => p.theme.bodyBackgroundColor};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: relative;
    left: initial;
    top: initial;
    background: none;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
  }

  ul {
    display: flex;
    flex-direction: column;
    position: relative;
    left: initial;
    top: initial;
    background: none;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
    padding-left: 0px;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  min-width: 25px;
  width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    margin: 5px 0;
    background: ${(p) => p.theme.bodyFontColor};
    width: 100%;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

  return (
    <HeaderWrapper>
      <Mobile>
        <MobileMenuIcon
          onClick={() => setMenuOpen((s) => !s)}
          onDoubleClick={() => {
            setMenuOpen(false);
            setIsNavOpen((s) => !s);
          }}
        >
          <MenuSVG />
        </MobileMenuIcon>
        {/* Main Menu Navigation */}
        <Menu open={menuOpen}>
          <MenuItems />
        </Menu>
      </Mobile>

      <Default>
        <MobileMenuIcon onClick={() => setIsNavOpen((s) => !s)}>
          <MenuSVG />
        </MobileMenuIcon>
      </Default>
      {/* Left side Menu Navigation ANIMATE */}
      {isNavOpen && <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />}
    </HeaderWrapper>
  );
};

export default Header;
