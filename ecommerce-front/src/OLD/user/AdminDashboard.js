import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LayoutWithMenu from "../../core/LayoutWithMenu";
import useStyles from "./styles";
import { isAuthenticated } from "../../../auth";

const AdminDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminInfo = () => {
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

  const adminLinks = () => {
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
        <h4>Admin Links</h4>

        <ul>
          <li>
            <Link to="/create/category">Create Category</Link>
          </li>
          <li>
            <Link to="/create/product">Create Product</Link>
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
      {adminLinks()}
      {adminInfo()}
    </LayoutWithMenu>
  );
};

export default AdminDashboard;
