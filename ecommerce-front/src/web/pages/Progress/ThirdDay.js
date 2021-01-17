import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const variants = {
  open: { opacity: 1, height: "auto" },
  close: { opacity: 0.5, height: 0 },
};

const ThirdDay = () => {
  const [isToggled1, setIsToggled1] = useState(true);

  return (
    <article>
      <AnimatePresence>
        <h3
          role="button"
          onClick={() => setIsToggled1((prevState) => !prevState)}
        >
          Third Day
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
              62 -<span>Docker server Commands</span>
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default ThirdDay;
