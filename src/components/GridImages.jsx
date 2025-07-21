import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import laceTop from '../assets/bannerBg3.jpeg';
import laceFront from '../assets/letswigout.webp';
import multis from '../assets/ImageGrid6.jpeg';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut'
    }
  }),
};

const WigTypesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start((i) => "visible");
    }
  }, [controls, inView]);

  return (
    <div className="w-full bg-[#6D0D2F] py-16 px-4 sm:px-8">
      {/* Heading with animation */}
      <div ref={ref} className="mb-16 max-w-[1536px] mx-auto">
        {["However", "you wear it,", "we have it."].map((line, index) => (
          <motion.h2
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="text-[#FFF9EC] text-6xl sm:text-7xl md:text-9xl font-bold text-left leading-tight"
          >
            {line}
          </motion.h2>
        ))}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1536px] mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-start group">
          <div className="overflow-hidden w-full">
            <img
              src={laceTop}
              alt="Lace Tops"
              className="w-full h-[700px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="text-[#FFF9EC] text-4xl font-semibold mt-4 text-left w-full">LACE TOPS</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start group">
          <div className="overflow-hidden w-full">
            <img
              src={laceFront}
              alt="Lace Fronts"
              className="w-full h-[700px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="text-[#FFF9EC] text-4xl font-semibold mt-4 text-left w-full">LACE FRONTS</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start group">
          <div className="overflow-hidden w-full">
            <img
              src={multis}
              alt="Multis"
              className="w-full h-[700px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="text-[#FFF9EC] text-4xl font-semibold mt-4 text-left w-full">MULTIS</p>
        </div>
      </div>
    </div>
  );
};

export default WigTypesSection;
