import React from "react";
import styled from "styled-components";
import Header from "components/Header/Header";
import Header2 from "components/Header/Header2";
import Nav from "components/Nav/Nav";

const Content = styled.main`
  /* max-width: 800px; */
  margin: 80px auto 0 auto;
  /* padding: 0 16px; */
  font-family: "Kaushan Script";
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <Content>
        {/* <Header /> */}
        <Header2 />

        {children}
      </Content>
    </>
  );
};

export default PageLayout;
