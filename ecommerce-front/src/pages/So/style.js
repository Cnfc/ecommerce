import styled from "styled-components";

export const Button = styled.button`
  background-color: firebrick;
  height: 5vh;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainWorkSpace = styled.main`
  margin-top: 5vh;
  height: 90vh;
  /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > button {
    width: 100%;
    display: flex;
    justify-content: center;
  } */
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightcyan;
  padding: 0 0 0 10rem;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
`;

export const LinksStyle = styled.ul`
  padding: 0;
`;
export const Link = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  height: 5rem;
  margin: 4px;
`;

export const WorkZone = styled.div`
  background-color: green;
  width: 40vh;
  position: relative;
  left: 0;
  z-index: 15;
`;
