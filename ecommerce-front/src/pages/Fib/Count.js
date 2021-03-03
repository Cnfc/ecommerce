import React, { useState, useReducer } from "react";
import Enter from "./components/Enter";

const Count = ({ number, user, onUserChange, onNumberChange }) => {
  const [name, setName] = useState(user);
  const [numberValue, setNumber] = useState(number);

  // const [state, dispatch] = useReducer()

  const handleSubmit = (e) => {
    e.preventDefault();

    // onUserChange(name);
    // onNumberChange(numberValue);
  };
  return <div>Count</div>;
};

export default Count;
