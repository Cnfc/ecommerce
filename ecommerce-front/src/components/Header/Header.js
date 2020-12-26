import React, { useState } from "react";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const Menu = styled.nav`
  display: ${(p) => (p.open ? "block" : "none")};
  font-family: "Open Sans";
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  padding: 8px;
  border-bottom: 3px solid #fdd54f;
  background-color: #fff;

  @media (min-width: 768px) {
    display: flex;
    left: initial;
    top: initial;
    background: none;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
  }
`;

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: black;
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  min-width: 25px;
  width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    margin: 5px 0;
    background: black;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div></div>
        <div></div>
        <div></div>
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink isActive={pathname === "/"} to="/">
          Home
        </StyledLink>
        <StyledLink isActive={pathname === "/login"} to="/login">
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
