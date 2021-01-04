import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isToggled, setToggle, children }) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translate3d(-50%, 0,0)",
          }}
        >
          <motion.div initial={{ y: 80 }} animate={{ y: 1 }} exit={{ y: 50 }}>
            <button onClick={() => setToggle(false)}>Close</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
