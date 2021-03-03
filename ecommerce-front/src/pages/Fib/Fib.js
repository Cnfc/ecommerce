import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { fetchIndex } from "./meta/actions";

import Spinner from "../../components/Spinner";
import MainLayout from "../../assets/layout/MainLayout";

const Fib = () => {
  const [index, setIndex] = useState("");

  const dispatch = useDispatch();
  const { data, values, isError, isLoading } = useSelector(
    (state) => state.indexValue
  );

  const fetchIndexes = async () => {
    dispatch(fetchIndex());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/api/values", {
      index: index,
    });
    setIndex("");
  };

  useEffect(() => {
    fetchIndexes();
  }, []);

  // console.log(seenIndexes, values);

  const renderSeenIndexes = () => {
    return data.map(({ number }) => number).join(", ");
  };

  const renderValues = () => {
    let entries = [];

    for (let i in values) {
      entries.push(
        <div key={i}>
          For index {i} I calculated {values[i]}
        </div>
      );
    }
    return entries;
  };

  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <label>Enter your index:</label>
          <input
            value={index}
            onChange={(event) => setIndex(event.target.value)}
          />
          <button>Submit</button>
        </form>

        <h3>Indexes I have seen:</h3>
        {renderSeenIndexes()}
        {isLoading ? <Spinner /> : null}
        {isError ? null : null}

        <h3>Calculated Values:</h3>
        {renderValues()}
        {isLoading ? <Spinner /> : null}
      </div>
    </MainLayout>
  );
};

export default Fib;
