import React, { useState, useEffect } from "react";

import { getCategories } from "../core/apiCore.js";

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: "",
    searched: false,
  });

  const { categories, category, search, results, searched } = data;

  // const loadCategories = () => {
  //   getCategories().then((data) => {
  //     if (data.error) {
  //       console.log(data.error);
  //     } else {
  //       setData({ ...data, categories: data });
  //     }
  //   });
  // };

  useEffect(() => {
    // loadCategories();
  }, []);

  const searchForm = () => {
    return (
      <form
      // onSubmit={}
      >
        <input type="submit" />
      </form>
    );
  };

  return (
    <div>
      <h2>Search Bar</h2>
      <div>{searchForm()}</div>
    </div>
  );
};
export default Search;
