import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrapArr } from "../../../../assets/function/wrapArr";

const COLORS = [
  "var(--green)",
  "var(--red)",
  "var(--black)",
  "var(--purp)",
  "var(--blue)",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const SlideShow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
  };

  const index = wrapArr(0, COLORS.length, page);

  return (
    <div style={{ position: "relative", height: 400 }}>
      <AnimatePresence custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            console.log(offset.x);

            if (offset.x > 400) {
              paginate(1);
            } else if (offset.x < -400) {
              paginate(-1);
            }
          }}
          style={{
            height: 400,
            width: "100%",
            background: COLORS[index],
            position: "absolute",
            left: 0,
            top: 0,
          }}
        ></motion.div>
      </AnimatePresence>
      <div
        style={{
          zIndex: 10,
          position: "absolute",
        }}
      >
        <button onClick={() => paginate(-1)}>{">"}</button>
        <button onClick={() => paginate(1)}>{"<"}</button>
      </div>
      SlideShow
    </div>
  );
};

export default SlideShow;
