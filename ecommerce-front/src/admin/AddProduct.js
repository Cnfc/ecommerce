import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Layout from "../web/core/LayoutWithMenu";
// import useStyles from "./styles";
import { isAuthenticated } from "../auth";
import { createProduct, getCategories } from "./apiAdmin";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
    formData: "",
  });

  // prettier-ignore
  const {name, description, price, categories, category, shipping, quantity,photo,loading,error,createdProduct,redirectToProfile,formData,} = values;
  const { user, token } = isAuthenticated();

  const init = () => {
    getCategories()
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({ ...values, categories: data, formData: new FormData() });
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;

    formData.set(name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    createProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          // ...values,
          name: "",
          description: "",
          photo: "",
          price: "",
          quantity: "",
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };

  console.log(values);

  const newPostForm = () => (
    <form
      onSubmit={clickSubmit}
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
      }}
    >
      <h4>Post Photo</h4>
      <div className="product_label">
        <label className="">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="/image/*"
          />
        </label>
      </div>

      <div className="product_label">
        <label>Name</label>
        <input onChange={handleChange("name")} type="text" values={name} />
      </div>

      <div className="product_label">
        <label>Product Description</label>
        <textarea
          onChange={handleChange("description")}
          type="text"
          values={description}
        />
      </div>

      <div className="product_label">
        <label>Price</label>
        <input onChange={handleChange("price")} type="number" values={price} />
      </div>

      <div className="product_label">
        <label>Category</label>

        <select onChange={handleChange("category")}>
          <option value="">Please Select category</option>

          {categories &&
            categories.map((category, index) => (
              <option key={index} value={category._id}>
                {category.name}
              </option>
            ))}
        </select>
      </div>

      <div className="product_label">
        <label>Shipping</label>

        <select onChange={handleChange("shipping")}>
          <option value="">Please Select</option>
          <option value="0">NO</option>
          <option value="1">YES</option>
        </select>
      </div>

      <div className="product_label">
        <label>Quantity</label>
        <input
          onChange={handleChange("quantity")}
          type="number"
          values={quantity}
        />
      </div>

      <button>Create Product</button>
    </form>
  );

  const showError = () => (
    <div className="danger" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className="danger" style={{ display: createdProduct ? "" : "none" }}>
      <h2>{`${createdProduct} is created`}</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div>
        <h2>Loading....</h2>
      </div>
    );

  return (
    <Layout
      title="Add a new Product"
      description={` category ready to add new product?`}
      className="categoryLayout"
    >
      {showLoading()}
      {showSuccess()}
      {showError()}
      {newPostForm()}
    </Layout>
  );
};

export default AddProduct;
