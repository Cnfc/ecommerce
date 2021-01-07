import React from "react";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  padding: 20px;
  margin: 20px;
  ul li {
    list-style-type: upper-roman;
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin: 10px;
  }
`;

const Progress = () => {
  return (
    <Container>
      <h1>Day 1 of Docker & TS & NODE</h1>
      <h6>Docker 1-250; - kernel - container - image</h6>
      <div>
        <Tooltip title="reference the docker client" arrow>
          <Button>1docker</Button>
        </Tooltip>
        <Tooltip title="docker create (-a):give me output + docker start" arrow>
          <Button>run</Button>
        </Tooltip>
        <Tooltip title="name of image to use this container" arrow>
          <Button>image name </Button>
        </Tooltip>
        <Tooltip title="default command" arrow>
          <Button>4command</Button>
        </Tooltip>
      </div>

      <div>
        <h4>Linux command</h4>
        <ul>
          <li>ping google.com</li>
        </ul>
        <h4>Doker commang command</h4>
        <ul>
          <li>docker ps --all</li>
          <li>docker system prune (empty cache && deliting containers)</li>
          <li>docker kill(immediatly) && stop(complete &&stop, max10s )</li>
          <li>docker exec -it id command :: run another command</li>
        </ul>
        <AddIcon fontSize="large" htmlColor="green" />
      </div>
    </Container>
  );
};

export default Progress;
