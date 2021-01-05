import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Button = styled.button`
  width: 100%;
  background-color: ${(p) =>
    p.secondary ? (p) => p.theme.secondaryColor : (p) => p.theme.primaryColor};
  color: ${(p) => p.theme.bodyFontColor};

  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
  border: none;
  box-shadow: none;
  display: block;
  white-space: none;
  box-shadow: 1em;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
