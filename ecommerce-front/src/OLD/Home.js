import React, { useState, useEffect } from "react";

import { getProducts } from "../../core/apiCore";

import useStyles from "./styles";
import LayoutWithMenu from "../../core/LayoutWithMenu";
import Card from "../../core/Card";
import Search from "../../core/search";

const Home = () => {
  const classes = useStyles();

  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    // loadProductsBySell();
    // ccom;
    // loadProductsByArrival();
  }, []);

  return (
    <LayoutWithMenu
      title="HomePage"
      description="Node React ecommerce Application"
    >
      <Search />
      <h2>Best Sellers</h2>
      <div className="card">
        {productsBySell.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>

      <h2>New Arrivals</h2>
      <div className="card">
        {productsByArrival.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </LayoutWithMenu>
  );
};
export default Home;
