import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Slide = ({
  children,
  isActive = true,
  direction = 1,
  distance = 200,
}) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          exit={{ opacity: 0, x: direction * (distance * -1) }}
          initial={{ opacity: 0, x: direction * (distance * 1) }}
          animate={{ opacityw: 1, x: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Slide;
