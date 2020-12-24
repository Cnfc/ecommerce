import React, { useState, useEffect } from "react";

import Categories from "../../core/Checkbox";
import { prices } from "../../core/fixedPrices";
import { getCategories, getFilteredProduct } from "../../core/apiCore";

// import useStyles from "./styles";
import LayoutWithMenu from "../../core/LayoutWithMenu";
import Card from "../../core/Card";
import RadioBox from "../../core/RadioBox";

const Shop = (props) => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [filteredResults, setFilteredResults] = useState("");
  const [size, setSize] = useState(0);
  const [loading, setLoading] = useState(true);

  const init = () => {
    getCategories()
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setCategories(data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    getFilteredProduct(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = (newFilters) => {
    let toSkip = skip + limit;
    // console.log(newFilters);
    getFilteredProduct(toSkip, limit, newFilters.filters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults([...filteredResults, ...data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button style={{ backgroundColor: "#fef3dc" }} onClick={loadMore}>
          Load More
        </button>
      )
    );
  };
  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    // console.log(filters, filterBy);

    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === "price") {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }

    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  // console.log(filteredResults);
  return (
    <LayoutWithMenu
      title="Shop Page"
      description="Search and find Books of your choice"
      className="shop"
    >
      <>
        <div style={{ width: "18%" }}>
          <h4>Filter by categories</h4>
          <ul className="shop_list">
            {loading && <li>Loading....</li>}

            <Categories
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, "category")}
            />
          </ul>
          <h4>Filter by price range</h4>

          <div>
            <RadioBox
              prices={prices}
              handleFilters={(filters) => handleFilters(filters, "price")}
            />
          </div>
        </div>

        <div style={{ width: "75%", display: "flex", flexWrap: "wrap" }}>
          {/* <h4>Products</h4> */}
          {filteredResults &&
            filteredResults.map((product, index) => (
              <Card key={index} product={product} />
            ))}
        </div>
        {/* <hr /> */}
      </>
      {loadMoreButton()}
    </LayoutWithMenu>
  );
};

export default Shop;
