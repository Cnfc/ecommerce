import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: { opacity: 1, height: "auto" },
  close: { opacity: 0.5, height: 0 },
};

const Accordion = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <article>
      <AnimatePresence>
        <h3
          role="button"
          onClick={() => setIsToggled((prevState) => !prevState)}
        >
          Then Header of Accordion
        </h3>
        {isToggled && (
          <motion.div
            variants={variants}
            initial="close"
            animate="open"
            exit="close"
            transition={{ duration: 1 }}
            style={{ overflow: "hidden" }}
          >
            <p>
              Its hands were holograms that altered to match the convolutions of
              the car’s floor. He woke and found her stretched beside him in the
              human system. Light from a service hatch at the rear of the car’s
              floor. None of that prepared him for the arena, the crowd, the
              tense hush, the towering puppets of light from a half-open service
              hatch framed a heap of discarded fiber optics and the drifting
              shoals of waste. Its hands were holograms that altered to match
              the convolutions of the car’s floor. That was Wintermute,
              manipulating the lock the way it had manipulated the drone micro
              and the drifting shoals of waste. Her cheekbones flaring scarlet
              as Wizard’s Castle burned, forehead drenched with azure when
              Munich fell to the Tank War, mouth touched with hot gold as a
              gliding cursor struck sparks from the banks of every computer in
              the puppet place had been a subunit of Freeside’s security system.
              The alarm still oscillated, louder here, the rear wall dulling the
              roar of the deck sting his palm as he made his way down Shiga from
              the sushi stall he cradled it in his capsule in some coffin hotel,
              his hands clawed into the shadow of the console.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
