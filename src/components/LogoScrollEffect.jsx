import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import mainImage from "../assets/letswigout.webp";
import logoImage from "../assets/sliderlogo.png";

const HorizontalScrollingLogo = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Animation transforms
    const logoX = useTransform(scrollYProgress, [0, 0.65], ["100%", "-100%"]);
    const mainImageY = useTransform(scrollYProgress, [0, 0.95], ["0%", "10%"]);
    const textX = useTransform(scrollYProgress, [0, 0.7], ["-90%", "380%"]);
    const textY = useTransform(scrollYProgress, [0, 0.7], ["0%", "430%"]);
    const textZ = useTransform(scrollYProgress, [0, 0.7], ["300%", "-350%"]);


    return (
        <div
            ref={containerRef}
            className="relative w-full h-[150vh] bg-[#FFF9EC] overflow-hidden pt-36 pb-4"
            style={{ willChange: 'transform' }}
        >

            {/* Logo container */}
            <motion.div
                className="fixed top-0 left-0 right-0 flex justify-center z-0"
                style={{
                    x: logoX,
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                }}
            >
                <img
                    src={logoImage}
                    alt="Sliding Logo"
                    className="w-[80vw] max-w-[1300px] h-auto object-contain opacity-100 pointer-events-none mt-[5vh] md:mt-10"
                    style={{
                        willChange: 'transform',
                    }}
                />
            </motion.div>

            {/* Main image container */}
            <motion.div
                className="sticky top-0 h-screen flex items-center justify-center z-10"
                style={{
                    y: mainImageY,
                    willChange: 'transform'
                }}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <img
                        src={mainImage}
                        alt="Main Image"
                        className="w-[90vw] max-w-[150vw] h-auto max-h-[120vh] object-contain"
                    />

                    {/* HEAD text - overlapping the image */}
                    <motion.div
                        className="absolute left-10 bottom-60 text-white text-4xl md:text-6xl font-bold z-20 whitespace-nowrap"
                        style={{
                            x: textX,
                            willChange: 'transform',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                    >
                        FALL
                    </motion.div>

                    <motion.div
                        className="absolute left-10 bottom-[130px] text-white text-4xl md:text-6xl font-bold z-20 whitespace-nowrap"
                        style={{
                            x: textY,
                            willChange: 'transform',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                    >
                        HEAD
                    </motion.div>

                    <motion.div
                        className="absolute right-0 bottom-0 text-white text-4xl md:text-6xl font-bold z-20 whitespace-nowrap"
                        style={{
                            x: textZ,
                            willChange: 'transform',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                    >
                        FIRST
                    </motion.div>



                </div>
            </motion.div>
        </div>
    );
};

export default HorizontalScrollingLogo;