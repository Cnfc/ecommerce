import React from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  width: 21px;
  min-width: 21px;
  height: 21px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  background-image: linear-gradient(
    to bottom,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  border-radius: 2.5rem;
`;

const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  background: white;
  margin-top: 1px;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${(p) => (p.isActive ? "26px" : "1px")});
`;

const Toggle = ({ isActive, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      {/* <Notch isActive={isActive} /> */}
    </ToggleWrapper>
  );
};

export default Toggle;
