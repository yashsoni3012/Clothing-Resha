import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/sliding1.webp";
import img2 from "../assets/sliding2.webp";
import img3 from "../assets/sliding3.webp";
import img4 from "../assets/sliding4.webp";
import img5 from "../assets/sliding5.webp";
import img6 from "../assets/sliding6.webp";
import img7 from "../assets/sliding7.webp";
import img8 from "../assets/sliding8.webp";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const ContinuousSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-black">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="h-[300px] w-[300px] sm:h-[800px] sm:w-[600px] object-cover object-top flex-shrink-0"
          />

        ))}
      </motion.div>
    </div>
  );
};

export default ContinuousSlider;
