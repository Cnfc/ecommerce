import React from "react";
import { Header, Button } from "./styles";

const Login = () => {
  return (
    <>
      <Header>
        Login
        <Button>Button Test Primary</Button>
        <Button large>Button Test Primary</Button>
        <Button secondary>Button Test Secondary</Button>
        <Button disabled>Button Text Disabled</Button>
      </Header>
    </>
  );
};

export default Login;
