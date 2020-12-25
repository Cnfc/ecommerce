import React, { useState } from "react";

const Checkbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (c) => () => {
    const currentCategoryId = checked.indexOf(c);
    const newCheckedCategoryId = [...checked];

    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(c);
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1);
    }
    // console.log(newCheckedCategoryId);

    setChecked(newCheckedCategoryId);
    handleFilters(newCheckedCategoryId);
  };

  return categories.map((category, index) => (
    <label key={index} className="">
      <li className="">
        <input
          onChange={handleToggle(category._id)}
          type="checkbox"
          className="form-check-input"
          value={checked.indexOf(category._id === -1)}
        />
        {category.name}
      </li>
    </label>
  ));
};

export default Checkbox;
