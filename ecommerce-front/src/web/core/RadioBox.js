import React, { useState } from "react";

const RadioBox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    //
    handleFilters(event.target.value);
    setValue(event.target.value);
  };

  return prices.map((price, index) => (
    <label key={index}>
      <div className="">
        <input
          type="radio"
          name={price}
          className="form-check-input"
          onChange={handleChange}
          value={`${price._id}`}
        />
        {price.name}
      </div>
    </label>
  ));
};

export default RadioBox;
