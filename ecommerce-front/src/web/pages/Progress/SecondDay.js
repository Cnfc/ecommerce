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
  const [isToggled1, setIsToggled1] = useState(true);

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
              {/* <Tooltip title="reference the docker client" arrow>
                  <Button>1docker</Button>
                </Tooltip> */}
              Init
              <span>Docker server Commands</span>
              <div>
                <Tooltip
                  arrow
                  title="Instruction telling Docker server what to do"
                >
                  <Button>FROM</Button>
                </Tooltip>
                <Tooltip arrow title="">
                  <Button>RUN</Button>
                </Tooltip>
                <Tooltip arrow title="">
                  <Button>CMD</Button>
                </Tooltip>

                <Tooltip arrow title="">
                  <Button>COPY (./from => ./to)</Button>
                </Tooltip>
              </div>
              <div>Docker Commands: </div>
              Order is important
              <div></div>
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default SecondDay;
