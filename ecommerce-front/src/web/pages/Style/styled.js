import styled from "styled-components";

export const Button = styled.button`
  color: black;
  background: #dede;
`;

const screens = {
  phone: (...args) => {
    const styles = args;
    console.log(styles);

    return `@media (min-width: 576px) {
      #{styles}
    }`;
  },
};

export const Banner = styled.div`
  background: red;
  ${screens.phone`
    background: blue
  `}
`;
