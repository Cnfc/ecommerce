import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Plus = styled(motion.div)`
  color: black;
  min-width: 50px;
  min-height: 50px;
  position: fixed;
  background-color: green;
  top: 80%;
  left: 90%;
`;

const PlusButton = () => {
  return (
    <Plus
      // initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0, 1] }}
      transition={{ duration: 3, times: [0, 0.2, 0.3, 1] }}
    >
      +
    </Plus>
  );
};

export default PlusButton;
