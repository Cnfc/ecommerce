import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Card, CardGrid, Container, Header } from "./Elements";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";
import Accordion from "components/Accordion/Accordion";
import PageLayout from "core/PageLayout";
import PlusButton from "components/PlusButton/PlusButton";
import Nav from "components/Nav/Nav";

const Animation = () => {
  const [value, setValue] = useState(0);
  const [isToggled, setToggle] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  console.log(isNavOpen);
  return (
    <PageLayout>
      <>
        <Menu onClick={() => setIsNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

        {isToggled && <PlusButton />}
        <AnimatePresence>
          <motion.div>
            {/* <Header>
            <h1>Header</h1>
          </Header> */}
            <Container>
              <h2 onClick={() => setToggle(!isToggled)}>Super Cool</h2>

              <Accordion />
              {/* <CardGrid>
              <Card style={{ background: "var(--purp)" }}>
                <h3>Some card</h3>
                <img src={purp} />
              </Card>

              <Card style={{ background: "var(--blue)" }}>
                <h3>Some card</h3>
                <img src={blue} />
              </Card>
              <Card style={{ background: "var(--black)" }}>
                <h3>Some card</h3>
                <img src={black} />
              </Card>
              <Card style={{ background: "var(--green)" }}>
                <h3>Some card</h3>
                <img src={green} />
              </Card>
            </CardGrid> */}
            </Container>
          </motion.div>
        </AnimatePresence>
      </>
    </PageLayout>
  );
};

export default Animation;
