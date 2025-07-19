import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import centerImage from "../assets/ImageGridNew.jpeg";
import left1 from "../assets/ImageGrid3.jpeg";
import left2 from "../assets/ImageGrid3.jpeg";
import right1 from "../assets/ImageGrid6.jpeg";
import right2 from "../assets/ImageGrid8.jpeg";

const ImageGridLayout = () => {
  const [scrollDir, setScrollDir] = useState("down");

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollDir(currentScroll > lastScroll ? "down" : "up");
      lastScroll = currentScroll;

      // Trigger animation based on direction
      const fromY = currentScroll > lastScroll ? -50 : 50;
      const toY = 0;

      controls1.start({ y: toY, opacity: 1, transition: { duration: 0.5 } });
      controls2.start({ y: toY, opacity: 1, transition: { duration: 0.5 } });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls1, controls2]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-100 overflow-x-auto px-4 gap-6">
      {/* Left Side Images with scroll animation */}
      <div className="flex flex-col gap-4">
        <motion.img
          src={left1}
          alt="left1"
          className="object-cover"
          initial={{ y: 0, opacity: 0 }}
          animate={controls1}
        />
        <motion.img
          src={left2}
          alt="left2"
          className="object-cover"
          initial={{ y: 0, opacity: 0 }}
          animate={controls2}
        />
      </div>

      {/* Center Image */}
      <div> 
        <img src={centerImage} alt="center" className="object-cover" />
      </div>

      {/* Right Side Images (static for now) */}
      <div className="flex flex-col gap-4">
        <img src={right1} alt="right1" className="object-cover" />
        <img src={right2} alt="right2" className="object-cover" />
      </div>
    </div>
  );
};

export default ImageGridLayout;
