import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import { Input } from "components/Input/Input";
import { Input } from "../../../components/Input/Input";
import { Header, Button } from "./styles";
import PageLayout from "core/PageLayout";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 4px;
`;

let timeout;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleImputChange(e) {
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  }

  const showPassword = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <>
      <PageLayout>
        <Header>
          <h1>Login Page</h1>
          <Form>
            <Input
              name="username"
              placeholder="Username"
              onChange={handleImputChange}
              value={formFields.username}
              type="text"
            />
            <Input
              name="password"
              placeholder="Password"
              onChange={handleImputChange}
              value={formFields.password}
              type={showPass ? "password" : "text"}
            />
            <button onClick={showPassword}>show/hide</button>
            <Button disabled={loading} onClick={handleSubmit} large>
              {loading ? "Loading..." : "Login"}
            </Button>
            {!loading && (
              <>
                <Button secondary>Register</Button>
              </>
            )}
          </Form>
        </Header>
      </PageLayout>
    </>
  );
};

export default Login;
