import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import salonImage from '../assets/wigsbyimage.jpeg';

const Wigs_By_EstY = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const shutterVariants = {
    hidden: {
      scaleY: 1,
      transformOrigin: 'bottom',
    },
    visible: {
      scaleY: 0,
      transition: {
        duration: 2,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const imageRevealVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#FFF9EC' }}>
      <div className="flex flex-col md:flex-row items-start justify-between px-4 py-10 md:px-20 gap-8">

        {/* Left Side: Both Texts Aligned Bottom */}
        <div className="md:w-1/2 w-full flex flex-col justify-end h-[600px] gap-6">

          <p className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#800000] uppercase mt-8 sm:mt-16 w-full text-start px-2">
            <span className='pl-24'> With the amount of</span><br /> work that goes into every piece, we have decided to work with only one salon we trust.
          </p>
          <p className="text-sm sm:text-base md:text-sm font-semibold text-[#800000] uppercase mt-4 w-full text-start px-2">
            We work with <strong>BY ESTY</strong> because we know they will treat, color, cut, and style every one of our wigs correctly so that for you it will come out perfectly.
          </p>
        </div>

        {/* Right Side: Animated Image */}
        <div className="md:w-1/2 w-full flex justify-center items-end">
          <div
            className="relative overflow-hidden w-full max-w-[700px] h-[600px]"
            ref={ref}
          >
            {/* Shutter Layer */}
            <motion.div
              className="absolute inset-0 bg-[#FFF9EC] z-10"
              initial="hidden"
              animate={controls}
              variants={shutterVariants}
            />

            {/* Image */}
            <motion.img
              src={salonImage}
              alt="Styled wig"
              className="w-full h-full object-cover object-top absolute"
              initial="hidden"
              animate={controls}
              variants={imageRevealVariants}
            />
          </div>
        </div>
      </div>

      <div className="w-full px-5">
        <div className="max-w-8xl mx-auto">
          <hr className="border-t border-[#800000] w-full" />
        </div>
      </div>



    </div>
  );
};

export default Wigs_By_EstY;
