import styled, { css } from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Kaushan Script";
`;

export const Button = styled.button`
  width: 100%;

  background-color: ${(p) => (p.secondary ? "grey" : "#f8049c")};
  color: ${(p) => (p.secondary ? "wheal" : "white")};

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
