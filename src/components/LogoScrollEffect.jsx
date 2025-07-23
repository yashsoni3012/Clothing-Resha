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

    // Adjusted transform ranges
    const logoX = useTransform(scrollYProgress, [0, 0.95], ["-100%", "100%"]);
    const mainImageY = useTransform(scrollYProgress, [0, 0.95], ["0%", "20%"]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[150vh] bg-[#FFF9EC] overflow-hidden"
            style={{ willChange: 'transform' }}
        >
            {/* Background Logo - Positioned higher with top offset */}
            <motion.div
                className="fixed  inset-x-0 flex items-start justify-center z-0"
                style={{
                    x: logoX,
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                }}
            >
                <img
                    src={logoImage}
                    alt="Sliding Logo"
                    className="w-[800px] h-[700px] object-contain opacity-100 pointer-events-none"
                    style={{
                        willChange: 'transform',
                    }}
                />
            </motion.div>

            {/* Foreground Main Image */}
            <motion.div
                className="sticky top-0 h-screen flex items-center justify-center z-10"
                style={{
                    y: mainImageY,
                    willChange: 'transform'
                }}
            >
                <img
                    src={mainImage}
                    alt="Main Image"
                    className="max-w-[150vw] max-h-[120vh] object-contain"
                />
            </motion.div>
        </div>
    );
};

export default HorizontalScrollingLogo;