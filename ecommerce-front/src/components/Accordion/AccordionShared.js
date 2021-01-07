import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: { opacity: 1, height: "auto" },
  close: { opacity: 0.5, height: 0 },
};

const Accordion = ({ title, how, text }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <article>
      <AnimatePresence>
        <h3
          role="button"
          onClick={() => {
            setIsToggled((prevState) => !prevState);
            console.log("clicked");
          }}
        >
          {title}
        </h3>
        <h6>Complete: {how}</h6>
        {isToggled && (
          <motion.div
            variants={variants}
            initial="close"
            animate="open"
            exit="close"
            transition={{ duration: 1 }}
            style={{ overflow: "hidden" }}
          >
            <p>{text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
