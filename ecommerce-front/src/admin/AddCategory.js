import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Layout from "../web/core/LayoutWithMenu";
// import useStyles from "./styles";
import { isAuthenticated } from "../auth";
import { createCategory } from "./apiAdmin";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const showSuccess = () => {
    if (success) {
      return (
        <h3>
          {user.name} created a category {name}
        </h3>
      );
    }
  };

  const showError = () => {
    if (error) {
      return <h3>{error} it should be unique</h3>;
    }
  };

  const goBack = () => (
    <div>
      <Link to="/admin/dashboard">Back to dashboard</Link>
    </div>
  );

  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit} className="categoryPage">
      <>
        <label>{name}</label>
        <input
          type="text"
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
      </>
      <button>Create Category</button>
    </form>
  );

  return (
    <Layout
      title="Add a new Category"
      description={`${name} category ready to add new category?`}
      className="categoryLayout"
    >
      {newCategoryForm()}
      {showSuccess()}
      {goBack()}
      {showError()}
    </Layout>
  );
};

export default AddCategory;
