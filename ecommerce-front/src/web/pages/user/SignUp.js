import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { signup } from "../../../auth";
import Layout from "../../core/LayoutWithMenu";
import useStyles from "./styles";

const SignUp = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { email, name, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const signUpForm = () => (
    <form className={classes.signUpForm}>
      <div className={classes.formGroup}>
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div className={classes.formGroup}>
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>

      <div className={classes.formGroup}>
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>

      <button onClick={clickSubmit} className="signInButton">
        Submit
      </button>
    </form>
  );

  const showError = () => {
    return <div style={{ display: error ? "" : "none" }}>{error.Error}</div>;
  };

  const showSuccess = () => {
    return (
      <div style={{ display: success ? "" : "none" }}>
        New account is created. Please <Link to="/signin">SignIn</Link>
      </div>
    );
  };

  return (
    <Layout
      title="SignUp"
      description="SignUp to Node React ecommerce Application"
      className="container"
    >
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  );
};
export default SignUp;
