import img1 from "../assets/ImageGrid1.jpeg";
import guy1 from "../assets/poster images/poster2.png";
import guy2 from "../assets/poster images/poster3.png";
import guy3 from "../assets/poster images/poster4.png";
import girl1 from "../assets/poster images/poster5.png";
import girl2 from "../assets/poster images/poster6.png";
import girl3 from "../assets/poster images/poster7.png";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Set window height on mount and resize
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Center image animations
  const centerScale = useTransform(scrollYProgress, [0, 0.2], [1.5, 1]);
  const centerY = useTransform(scrollYProgress, [0, 0.4], ["100%", "0%"]);
  const centerOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Side images animations
  const leftY = useTransform(
    scrollYProgress,
    [0.15, 0.5, 0.85],
    ["250%", "0%", "-150%"]
  );
  const rightY = useTransform(
    scrollYProgress,
    [0.15, 0.5, 0.85],
    ["-250%", "0%", "150%"]
  );
  const sideOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.38, 0.8, 0.85],
    [0.7, 1, 1, 0]
  );

  // Text animations
  const textY = useTransform(scrollYProgress, [0.2, 0.40], [0, -750]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.55], [1, 0]);

  // NEW: Container move-up animation at the end
  const containerY = useTransform(
    scrollYProgress,
    [0.95, 3],
    [0, -windowHeight]
  );

  // Text positions
  const textPositions = [
    { top: "20%", left: "10%", text: "LET'S" },
    { top: "35%", right: "15%", text: "GET" },
    { top: "60%", left: "20%", text: "ON" },
    { top: "75%", right: "10%", text: "IT" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500vh] overflow-hidden bg-[#FFF9EC]"
    >
      {/* Changed: Remove containerOpacity and add containerY */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center"
        style={{ 
          y: containerY,
          opacity: 1 // Always visible now
        }}
      >
        {/* Center Image */}
        <motion.div
          className="relative z-20"
          style={{
            opacity: centerOpacity,
            scale: centerScale,
            y: centerY,
          }}
        >
            <img
              src={img1}
              alt="Center"
              className="object-cover shadow-xl"
              style={{
                width: "min(80vw, 420px)",
                height: "auto",
                aspectRatio: "1 / 1.5",
                borderRadius: "1rem",
              }}
            />
        </motion.div>

        {/* Floating Animated Texts */}
        {textPositions.map((pos, idx) => (
          <motion.div
            key={`text-${idx}`}
            className="absolute text-red-500 font-normal text-8xl uppercase flex items-center justify-center -z-40"
            style={{
              ...pos,
              width: "200px",
              height: "70px",
              borderRadius: "8px",
              y: textY,
              opacity: textOpacity,
            }}
          >
            {pos.text}
          </motion.div>
        ))}

        {/* Left Side Images */}
        <div className="absolute left-0 top-0 h-full w-[36%] flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4">
          {[{index :1, img: guy1}, {index :2, img: girl1}, {index :3, img: guy2}].map((item) => (
            <motion.div
              key={`left-${item.index}`}
              className="w-full max-w-[95%]"
              style={{
                y: leftY,
                opacity: sideOpacity,
                zIndex: 10 + item.index,
              }}
            >
              <img
                src={item.img}
                alt={`Left ${item.index}`}
                className="w-full h-auto object-cover rounded-xl shadow-2xl"
                style={{ aspectRatio: "1 / 1.5" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Right Side Images */}
        <div className="absolute right-0 top-0 h-full w-[36%] flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4">
          {[{index :1, img: girl2}, {index :2, img: guy3}, {index :3, img: girl3}].map((item) => (
            <motion.div
              key={`right-${item.index}`}
              className="w-full max-w-[95%]"
              style={{
                y: rightY,
                opacity: sideOpacity,
                zIndex: 10 + item.index,
              }}
            >
              <img
                src={item.img}
                alt={`Right ${item.index}`}
                className="w-full h-auto object-cover rounded-xl shadow-2xl"
                style={{ aspectRatio: "1 / 1.5" }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;