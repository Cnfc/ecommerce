import React, { useState } from "react";
import styled from "styled-components";

import Slide from "components/Animate/Slide/Slide";

const Panel = styled.div`
  display: flex;
  right: 0;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: right; */
  /* left: 80%; */
  /* width: 20%; */
  /* height: 100%; */
  background-color: lightgreen;
  z-index: -1;
`;

const RightPanel = () => {
  const [isActive, setIsActive] = useState(true);
  console.log(isActive);
  return (
    <div onClick={() => setIsActive(!isActive)}>
      Some
      <Panel>
        <Slide isActive={isActive}>
          <div>RightPanel</div>
        </Slide>
      </Panel>
      <Panel>
        <Slide isActive={isActive} direction={-1} distance={400}>
          <div>RightPanel</div>
        </Slide>
      </Panel>
    </div>
  );
};

export default RightPanel;
