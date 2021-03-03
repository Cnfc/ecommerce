import React, { useState } from "react";

const Enter = ({ name, number, onFibChange }) => {
  const [name1, setName] = useState(name);
  const [number1, setNumber] = useState(number);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send to redux

    onFibChange(name1, number1);
  };

  console.log(name, number);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name1}
          onChange={(e) => setName(e.target.value)}
          placeholder={name1}
        />
        <input
          value={number1}
          onChange={(e) => setNumber(e.target.value)}
          placeholder={number1}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Enter;
