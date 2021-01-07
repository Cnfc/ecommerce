import React, { useState } from "react";
import Layout from "core/Layout";
import PageLayout from "core/PageLayout";
import { Button } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import Nav from "components/Nav/Nav";
import MenuItems from "components/Header/MenuItems";

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
    <PageLayout>
      Home Page
      {/* <Button onClick={() => setOpenMenu((s) => !s)}>Menu</Button> */}
      {openMenu && <div>SOME</div>}
      sad
    </PageLayout>
  );
};

export default Home;
