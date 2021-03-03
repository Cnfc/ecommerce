import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: pink;
  height: 5vh;
`;
const HeaderInput = styled.input`
  width: 100px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInput placeholder="Content" />
    </HeaderWrapper>
  );
};

export default Header;
