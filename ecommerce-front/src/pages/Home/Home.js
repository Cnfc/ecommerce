import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "layouts/Layout";
import PageLayout from "layouts/PageLayout";
import { Button } from "@material-ui/core";
import Nav from "components/Nav/Nav";
import MenuItems from "components/Header/MenuItems";

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

const hVariants = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
  exit: { opacity: 0, y: 100 },
};

const Home = () => {
  // return (
  //   <Layout
  //     title="Home Page"
  //     description="Node React Ecommerce App page DESCRIPTION"
  //   >
  //     ...
  //   </Layout>
  // );
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PageLayout>
        <motion.h3
          variants={hVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          Home Page
        </motion.h3>
        {/* <Button onClick={() => setOpenMenu((s) => !s)}>Menu</Button> */}
        {openMenu && <div>SOME</div>}
        sad
      </PageLayout>
    </motion.div>
  );
};

export default Home;
