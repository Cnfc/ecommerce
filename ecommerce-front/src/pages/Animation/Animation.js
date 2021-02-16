import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import MenuSVG from "components/Header/MenuSVG";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";
import Accordion from "components/Accordion/Accordion";
import PageLayout from "layouts/PageLayout";
import PlusButton from "components/PlusButton/PlusButton";
import Squares from "./components/Squares";
import SlideShow from "./components/SlideShow";
import Clup from "./components/Clup";

const Animation = () => {
  const [isToggled, setToggle] = useState(false);
  const [isCartActive, setIsCartActive] = useState(true);

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  const variants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  return (
    <PageLayout>
      <>
        {isToggled && <PlusButton />}
        {/* <Header>
            <h1>Header</h1>
          </Header> */}
        <Container>
          <h2 onClick={() => setToggle(!isToggled)}>Super Cool</h2>
          <Accordion />
          <Clup />
          <SlideShow />

          <CardGrid>
            <Card
              // whileHover={{ scale: 1.2 }}
              whileHover={{ scale: [1, 0.9, 1.1, 1] }}
              style={{ background: "var(--red)" }}
            >
              <h3>Some card</h3>
              <img src={purp} />
            </Card>
            <AnimatePresence>
              {isCartActive && (
                <motion.div
                  exit={{ height: 0, overflow: "hidden", opacity: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <Card
                    onDragEnd={(event, info) => {
                      console.log(info.point.x);
                      if (Math.abs(info.point.x) > 500) {
                        console.log("dismiss");
                        setIsCartActive(false);
                      } else if (info.point.x < 0) {
                        console.log("approve");
                      } else {
                        console.log("none");
                      }
                    }}
                    drag="x"
                    dragConstraints={{
                      left: -10,
                      right: 10,
                    }}
                    initial={{ y: 40 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                    }}
                    style={{
                      x,
                      opacity: isCartActive ? opacity : 0,
                      background: "var(--blue)",
                    }}
                  >
                    <h3>Some card</h3>
                    <img src={blue} />
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            <Card style={{ background: "var(--black)" }}>
              <h3>Some card</h3>
              <img src={black} />
            </Card>
            <Card style={{ background: "var(--green)" }}>
              <h3>Some card</h3>
              <img src={green} />
            </Card>
          </CardGrid>
          <Squares />
        </Container>
      </>
    </PageLayout>
  );
};

export default Animation;
