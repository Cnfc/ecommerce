import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AddIcon from "@material-ui/icons/Add";

const Plus = styled(motion.div)`
  color: black;
  min-width: 50px;
  min-height: 50px;
  position: fixed;
  top: 80%;
  left: 90%;
  font-size: 60px;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 70%;
    left: 70%;
  }
`;

const PlusButton = () => {
  return (
    <Plus
      animate={{ opacity: [0, 1, 0, 1] }}
      transition={{ duration: 3, times: [0, 0.2, 0.3, 1] }}
    >
      <AddIcon fontSize="inherit" htmlColor="green" />
    </Plus>
  );
};

export default PlusButton;
