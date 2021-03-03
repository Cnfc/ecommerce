import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";

const Switcher = styled.div`
  height: 50px;
  width: 50px;
  background: ${(props) => (props.light ? "red" : "pink")};
`;

const Button = () => {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState(false);
  const [mousePosition, setMouseposition] = useState({ x: null, y: null });

  const incrementValue = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleouseMove);

    return () => {
      window.removeEventListener("mousemove", handleouseMove);
    };
  }, [count]);

  const handleouseMove = (e) => {
    setMouseposition({
      x: e.pageX,
      y: e.pageY,
    });
  };
  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementValue}>i was Clicled {count} times</button>
      <h2>Toggle Light</h2>
      <Switcher light={light} onClick={() => setLight((s) => !s)} />
      <h2>Mouse Coordinate</h2>
      X:{mousePosition.x} Y:{mousePosition.y}
    </>
  );
};

export default Button;
