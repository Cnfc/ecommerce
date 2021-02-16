import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

const GridGallery = () => {
  const images = ["a", "v", "3", "a", "3", "b"];

  const { y } = useWindowScrollPosition({
    throttle: 500,
  });

  console.log(y);
  return (
    <div style={{}}>
      <motion.header
        style={{
          display: "flex",
          justifyContent: y > 20 ? "flex-start" : "center",
          background: y > 20 ? "white" : "#00214a",
        }}
        animate={{
          // background: y > 20 ? "white" : "#00214a",
          color: y > 20 ? "black" : "white",
          // boxShadow: v>20 ?  :
        }}
      >
        <motion.h1 layout className="fake-logo">
          Level up
        </motion.h1>
      </motion.header>
      <main>
        <h3>Grid Gallery</h3>
        <div>
          {images.map((image, index) => (
            <img
              style={{ cursor: "pointer" }}
              src={`https://picsum.photos/seed/${image}/500/300`}
              alt="placeholder"
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default GridGallery;
