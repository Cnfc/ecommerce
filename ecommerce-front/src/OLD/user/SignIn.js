import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import { signin, authenticate, isAuthenticated } from "../../../auth";
import LayoutWithMenu from "../../layouts/LayoutWithMenu";
import useStyles from "./styles";

const SignIn = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    email: "Lutessa@gmail.com",
    password: "Lutessa1",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, error, loading, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({ ...values, redirectToReferrer: true });
        });
      }
    });
  };

  const signUpForm = () => (
    <form className={classes.signUpForm}>
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

  const showLoading = () =>
    loading && (
      <div className="alert">
        <h3>Loading...</h3>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }

    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  //   return (
  //     <div style={{ display: loading ? "" : "none" }}>
  //       New account is created. Please <Link to="/signin">SignIn</Link>
  //     </div>
  //   );
  // };

  return (
    <LayoutWithMenu
      title="SignIn"
      description="SignIn to Node React ecommerce App"
      className="container"
    >
      {showLoading()}
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </LayoutWithMenu>
  );
};
export default SignIn;
