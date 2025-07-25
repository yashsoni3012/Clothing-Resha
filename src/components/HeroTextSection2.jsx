import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import reshaImage from "../assets/color-logo.png";
import rightImage from "../assets/herotextimage4.jpeg";
import bottomLeftImage from "../assets/herotextimage5.jpeg";

const HeroTextSection = () => {
    // Controls for left image animation
    const [leftRef, leftInView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });
    const leftControls = useAnimation();

    // Controls for right image animation
    const [rightRef, rightInView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });
    const rightControls = useAnimation();

    // Animate when in view
    React.useEffect(() => {
        if (leftInView) {
            leftControls.start("visible");
        }
    }, [leftControls, leftInView]);

    React.useEffect(() => {
        if (rightInView) {
            rightControls.start("visible");
        }
    }, [rightControls, rightInView]);

    // Animation variants
    const imageRevealVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                delay: 0.3, // Delay to sync with shutter
                ease: "easeOut"
            }
        }
    };

    const shutterVariants = {
        hidden: {
            scaleY: 1,
            transformOrigin: "bottom"
        },
        visible: {
            scaleY: 0,
            transition: {
                duration: 2,
                ease: [0.65, 0, 0.35, 1]
            }
        }
    };

    return (
        <div className="w-full min-h-screen t-[10vh]" style={{ backgroundColor: "#FFF9EC" }}>
            

            {/* Main Section */}
            <div className="w-full flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 pb-12 gap-8">
                {/* Left Side */}
                <div className="md:w-1/2 flex flex-col justify-between h-auto md:h-[850px]">
                    <div>
                        <p className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#800000] uppercase text-left">
                            <span className="text-sm sm:text-base md:text-lg font-bold text-[#800000] pr-2">03</span>
                            <span className="pl-4 sm:pl-6 md:pl-24 inline-block">
                               Here comes the cap, or
                            </span>
                            <br className="hidden sm:block" />
                           the canvas as we call it
                        </p>

                        <p className="text-sm sm:text-base md:text-sm font-semibold text-[#800000] uppercase mt-4 text-left px-2 sm:px-0">
                            Made with the lightest weight Swiss lace for ultimate comfort, and the most natural flow. We use lace that goes wider and deeper for hair that sits tightly, naturally, and above all comfortably. 
                        </p>
                    </div>
                    <div
                        className="mt-8 sm:mt-12 flex justify-center md:justify-start relative overflow-hidden"
                        ref={leftRef}
                        style={{ width: '100%', maxWidth: '400px', height: '500px' }}
                    >
                        {/* Shutter layer */}
                        <motion.div
                            className="absolute inset-0 bg-[#FFF9EC] z-10"
                            initial="hidden"
                            animate={leftControls}
                            variants={shutterVariants}
                        />
                        {/* Image */}
                        <motion.img
                            src={bottomLeftImage}
                            alt="European Hair"
                            className="w-[400px] h-[700px] object-cover object-top absolute"
                            initial="hidden"
                            animate={rightControls}
                            variants={imageRevealVariants}
                        />

                    </div>
                </div>

                {/* Right Side */}
                <div className="md:w-1/2 flex flex-col items-center justify-start h-auto md:h-[800px]">
                    <div
                        className="w-full relative overflow-hidden"
                        ref={rightRef}
                        style={{ height: '600px' }}
                    >
                        {/* Shutter layer */}
                        <motion.div
                            className="absolute inset-0 bg-[#FFF9EC] z-10"
                            initial="hidden"
                            animate={rightControls}
                            variants={shutterVariants}
                        />
                        {/* Image */}
                        <motion.img
                            src={rightImage}
                            alt="European Hair"
                            className="w-full h-[600px] object-cover object-top absolute inset-0"
                            initial="hidden"
                            animate={rightControls}
                            variants={imageRevealVariants}
                        />
                    </div>
                    <p className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#800000] uppercase mt-8 sm:mt-16 w-full text-start px-2">
                        <span className="text-sm sm:text-base md:text-lg font-bold text-[#800000] pr-2">04</span>
                        <span className="pl-4 sm:pl-6 md:pl-24 inline-block">
                            Now that the cap is
                        </span>
                        <br className="hidden sm:block" />
                        crafted and the hair is 
                        <br className="hidden sm:blobk"/><br/>
                        assembled
                    </p>


                    <p className="text-sm sm:text-base md:text-sm font-semibold text-[#800000] uppercase mt-4 w-full text-start px-2">
                        We match length, texture, and color and begin to prep it for the
                        next step. An average of five heads go into creating the one that
                        will sit so beautifully on yours.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroTextSection; 