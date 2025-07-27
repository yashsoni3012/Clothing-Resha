import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import mainImage from "../assets/poster images/landscape.jpg";
import logoImage from "../assets/sliderlogo.png";

const HorizontalScrollingLogo = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const logoX = useTransform(scrollYProgress, [0, 0.65], ["100%", "-100%"]);
  const mainImageY = useTransform(scrollYProgress, [0, 0.95], ["0%", "10%"]);

  const textX = useTransform(scrollYProgress, [0, 0.9], ["-180%", "290%"]);
  const textY = useTransform(scrollYProgress, [0, 0.8], ["-100%", "370%"]);
  const textZ = useTransform(scrollYProgress, [0, 0.9], ["300%", "-230%"]);

  const smoothTransition = {
    duration: 0.5,
    ease: "easeOut",
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[110vh] bg-[#FFF9EC] overflow-hidden pt-[50px]"
      style={{ willChange: "transform" }}
    >

      {/* ✅ LOGO IMAGE — only updated position + responsiveness */}
      <motion.div
        className="fixed -top-[150px] left-0 right-0 flex justify-center z-0"
        style={{
          x: logoX,
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src={logoImage}
          alt="Sliding Logo"
          className="object-contain opacity-100 pointer-events-none
      w-[100px] h-[100px] 
      md:w-auto md:h-[85vh]"
          style={{ willChange: "transform" }}
        />
      </motion.div>


      {/* ✅ MAIN IMAGE */}
      <motion.div
        className="sticky top-0 h-screen flex items-center justify-center z-10"
        style={{
          y: mainImageY,
          willChange: "transform",
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={mainImage}
            alt="Main Image"
            className="w-[90vw] md:w-[60vw] h-[50vh] md:h-[70vh] object-contain"
          />

          {/* ✅ TEXTS — Unchanged */}
          <motion.div
            className="absolute left-10 bottom-100 text-white text-4xl md:text-6xl font-bold z-20 whitespace-nowrap"
            style={{
              x: textX,
              willChange: "transform",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
            transition={smoothTransition}
          >
            FALL
          </motion.div>

          <motion.div
            className="absolute left-10 bottom-[250px] ease-in-out text-white text-4xl md:text-6xl font-bold z-20 whitespace-nowrap"
            style={{
              x: textY,
              willChange: "transform",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
            transition={smoothTransition}
          >
            HEAD
          </motion.div>

          <motion.div
            className="absolute right-0 bottom-[150px] text-white text-4xl md:text-6xl font-bold z-20 whitespace-nowrap"
            style={{
              x: textZ,
              willChange: "transform",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
            transition={smoothTransition}
          >
            FIRST
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HorizontalScrollingLogo;
