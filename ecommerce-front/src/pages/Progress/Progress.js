import React from "react";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import FirstDay from "./FirstDay";
import SecondDay from "./SecondDay";
import PageLayout from "layouts/PageLayout";
import K8s from "./K8s";

const Container = styled.div`
  padding: 20px;
  margin: 20px;
  ul li {
    list-style-type: upper-roman;
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin: 10px;
  }
`;

const Progress = () => {
  return (
    <PageLayout>
      <Container>
        <h6>Docker 1-250; - kernel - container - image</h6>
        <FirstDay />
        <p>1-25</p>
        <SecondDay />
        <p>25-</p>
      </Container>

      <K8s />
    </PageLayout>
  );
};

export default Progress;
