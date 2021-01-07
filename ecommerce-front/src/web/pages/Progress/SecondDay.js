import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const variants = {
  open: { opacity: 1, height: "auto" },
  close: { opacity: 0.5, height: 0 },
};

const SecondDay = () => {
  const [isToggled1, setIsToggled1] = useState(false);

  return (
    <article>
      <AnimatePresence>
        <h3
          role="button"
          onClick={() => setIsToggled1((prevState) => !prevState)}
        >
          Second Day
        </h3>
        {isToggled1 && (
          <motion.div
            variants={variants}
            initial="close"
            animate="open"
            exit="close"
            transition={{ duration: 0.5 }}
            style={{ overflow: "hidden" }}
          >
            <>
              <div>
                <Tooltip title="reference the docker client" arrow>
                  <Button>1docker</Button>
                </Tooltip>
                <Tooltip
                  title="docker create (-a):give me output + docker start"
                  arrow
                >
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
                  <li>
                    docker system prune (empty cache && deliting containers)
                  </li>
                  <li>
                    docker kill(immediatly) && stop(complete &&stop, max10s )
                  </li>
                  <li>
                    docker exec
                    <Tooltip
                      title="allows us to provide input to the container"
                      arrow
                    >
                      <Button>-it</Button>
                    </Tooltip>
                    id command :: run another command
                    <Tooltip
                      title="Commans Processors: bash, powershell, zsh, sh"
                      arrow
                    >
                      <Button>sh</Button>
                    </Tooltip>
                  </li>
                </ul>
                <AddIcon fontSize="large" htmlColor="green" />
              </div>
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default SecondDay;
