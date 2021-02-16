import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation, withTranslation, Trans } from "react-i18next";

import Layout from "layouts/Layout";
import PageLayout from "layouts/PageLayout";
import { Button } from "@material-ui/core";
import Nav from "components/Nav/Nav";
import MenuItems from "components/Header/MenuItems";
import { changeUser } from "pages/Apollo/meta/actions";

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
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  // const { searchRepo } = useActions();
  const { userName } = useSelector((state) => state.user);

  useEffect(() => {
    // setData(searchRepo());
  }, []);

  const [openMenu, setOpenMenu] = useState(false);
  const [name, setName] = useState(userName);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(changeUser(name));
  };

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
          {userName}
          <Trans i18nKey="home"></Trans>
        </motion.h3>
        <form onSubmit={handleSubmit}>
          <input placeholder={name} onChange={(e) => setName(e.target.value)} />
          <Trans i18nKey="home"></Trans>
          <button>
            <Trans i18nKey="buttonName" />
          </button>
        </form>
        {/* <Button onClick={() => setOpenMenu((s) => !s)}>Menu</Button> */}
        {openMenu && <div>SOME</div>}
        sad
      </PageLayout>
    </motion.div>
  );
};

export default Home;
