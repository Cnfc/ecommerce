import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
    </HeaderWrapper>
  );
};

export default Header;
