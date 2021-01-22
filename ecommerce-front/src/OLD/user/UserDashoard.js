import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LayoutWithMenu from "../../layouts/LayoutWithMenu";
import useStyles from "./styles";
import { isAuthenticated } from "../../../auth";

const UserDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const userInfo = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          // alignItems: "left",
          padding: "20px",
          minWidth: "60%",
          // justifyContent: "space-between",
        }}
      >
        <h4>User Information</h4>
        <ul>
          <li>{name}</li>
          <li>{email}</li>
          <li>{role === 1 ? "Admin" : "Registered User"}</li>
        </ul>
      </div>
    );
  };

  const userLinks = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          minWidth: "40%",
          justifyContent: "space-between",
        }}
      >
        <h4>User Links</h4>

        <ul>
          <li>
            <Link to="/cart">My cart</Link>
          </li>
          <li>
            <Link to="/profile/update">Update Profile</Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <LayoutWithMenu
      title="User Dashboard"
      description="User Dashboard"
      className="userLayout"
    >
      {userLinks()}
      {userInfo()}
    </LayoutWithMenu>
  );
};

export default UserDashboard;
