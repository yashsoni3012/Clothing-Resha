import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Words3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("center");
    } else {
      controls.start("initial");
    }
  }, [isInView, controls]);

  const variants = {
    initial: (pos) => ({
      x: pos === "left" ? "-100vw" : "100vw",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="h-screen flex flex-col justify-center items-center gap-12 overflow-hidden"
    >
      {/* First H1 - HOUSE */}
      <motion.h1
        className="text-4xl font-[cursive] text-right w-full pr-8"
        custom="right"
        variants={variants}
        initial="initial"
        animate={controls}
      >
        HOUSE
      </motion.h1>

      {/* Second H1 + Image - THE */}
      <motion.div
        className="flex items-center gap-4 uppercase font-sans text-4xl w-full pl-8"
        custom="left"
        variants={variants}
        initial="initial"
        animate={controls}
      >
        <h1>THE</h1>
        <div className="w-[100px] h-[50px] bg-gray-300" /> {/* Replace with <img> later */}
      </motion.div>

      {/* Third H1 - RESHA */}
      <motion.h1
        className="text-4xl uppercase font-sans text-right w-full pr-8"
        custom="right"
        variants={variants}
        initial="initial"
        animate={controls}
      >
        RESHA
      </motion.h1>
    </section>
  );
};

export default Words3;