import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// import { Input } from "components/Input/Input";
import { Input } from "../../components/Input/Input";
import { Header, Button } from "./styles";
import PageLayout from "layouts/PageLayout";
import Modal from "components/Modal/Modal";

const Form = styled(motion.form)`
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

  const [value, setValue] = useState(0);
  const [isToggled, setToggle] = useState(false);

  function handleInputChange(e) {
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
          <h1> Super Cool h2</h1>

          {!isToggled && (
            <AnimatePresence>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setToggle(true)}
              >
                Click
              </motion.button>
            </AnimatePresence>
          )}

          <Modal isToggled={isToggled} setToggle={setToggle}>
            <Form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                // type: "spring",
                // damping: 2,
                duration: 1,
              }}
            >
              <Input
                name="username"
                placeholder="Username"
                onChange={handleInputChange}
                value={formFields.username}
                type="text"
              />
              <Input
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
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
          </Modal>
        </Header>
      </PageLayout>
    </>
  );
};

export default Login;
