import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Content = styled.header`
  /* max-width: 800px; */
  /* margin: 15px auto 0 auto; */
  /* margin: 0 10rem; */
  /* padding: 0 16px; */
  font-family: "Kaushan Script";
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <Content>
        <Header />
        {children}
      </Content>
    </>
  );
};

export default PageLayout;
