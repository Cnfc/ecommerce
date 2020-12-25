import React from "react";
import { Header, Button } from "./styles";
import PageLayout from "core/PageLayout";

const Login = () => {
  return (
    <>
      <PageLayout>
        <Header>
          Login Page
          <h5>Different Buttons: </h5>
          <Button>Button Test Primary</Button>
          <Button large>Button Test Primary</Button>
          <Button secondary>Button Test Secondary</Button>
          <Button disabled>Button Text Disabled</Button>
        </Header>
      </PageLayout>
    </>
  );
};

export default Login;
