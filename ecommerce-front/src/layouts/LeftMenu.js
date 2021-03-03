import React from "react";
import styled from "styled-components";

const Content = styled.main`
  /* max-width: 800px; */
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 10rem;
  height: 100vh;
  background-color: pink;
  font-family: "Kaushan Script";
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
};

export default PageLayout;
