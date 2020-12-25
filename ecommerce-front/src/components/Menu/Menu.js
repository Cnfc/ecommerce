import React from "react";
import { Link, withRouter } from "react-router-dom";

import useStyles from "./styles";
// import { signout, isAuthenticated } from "../../auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return {
      color: "#ff9900",
      fontWeight: "bold",
      fontSize: "20px",
    };
  } else {
    return { color: "#777" };
  }
};

const Menu = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <ul className={classes.menuLinks}>
        <li>
          <Link style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={isActive(history, "/shop")} to="/shop">
            Shop
          </Link>
        </li>
        {/* {isAuthenticated() && isAuthenticated().user.role === 0 && ( */}
        <li>
          <Link to="/dashboard" style={isActive(history, "/dashboard")}>
            Dashboard
          </Link>
        </li>
        {/* )} */}
        {/* {isAuthenticated() && isAuthenticated().user.role === 1 && ( */}
        <li>
          <Link
            to="/admin/dashboard"
            style={isActive(history, "/admin/dashboard")}
          >
            AdminDashboard
          </Link>
        </li>
        {/* )} */}
        {/* {!isAuthenticated() && ( */}
        <>
          <li>
            <Link to="signup" style={isActive(history, "/signup")}>
              SignUp
            </Link>
          </li>
          <li>
            <Link to="/signin" style={isActive(history, "/signin")}>
              SignIn
            </Link>
          </li>
        </>
        {/* )} */}
        <li>
          <Link to="/about" style={isActive(history, "/about")}>
            About
          </Link>
        </li>
        {/* {isAuthenticated() && ( */}
        <li>
          <span
            style={{ cursor: "pointer", color: "#654" }}
            onClick={() => {
              // signout(() => {
              //   history.push("/");
              // });
            }}
          >
            SignOut
          </span>
        </li>
        {/* )} */}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
