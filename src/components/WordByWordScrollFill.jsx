import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollFillText = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    const sentence =
        "A culmination of decades of experience by our cue world-class team, that materializes in a flawless piece of wearable art that disappears from your thoughts the second it's on your head.";

    const words = sentence.split(" ");
    const totalWords = words.length;

    const fillSpread = 1 / (totalWords / 1.2);

    return (
        <div className="h-auto min-h-[50vh] bg-[#FFF9EC] flex items-center justify-center py-8 sm:py-0">
            <div
                ref={ref}
                className="min-h-[50vh] w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-[30px]"
            >
                <div className="flex flex-wrap max-w-8xl text-center justify-center md:justify-start text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium leading-snug sm:leading-relaxed md:leading-relaxed">
                    {/* RESHA WEARS small text */}
                    <span className="text-xs sm:text-xs md:text-sm font-bold mr-1 sm:mr-1 md:mr-2 self-end pb-1 sm:pb-2 md:pb-3 lg:pb-4 xl:pb-5 whitespace-nowrap">
                        RESHA WEARS
                    </span>

                    {/* Main text with first word indentation */}
                    <div className="flex flex-wrap justify-start">
                        {words.map((word, index) => {
                            const progressStart = index / totalWords;
                            const progressEnd = Math.min(progressStart + fillSpread, 1);

                            const color = useTransform(
                                scrollYProgress,
                                [progressStart, progressEnd],
                                ["#EBDCD1", "#7C1A1A"]
                            );

                            return (
                                <motion.span
                                    key={index}
                                    style={{ color }}
                                    className={`${index === 0 ? 'ml-2 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16 2xl:ml-24' : ''} mx-[0.1em]`}
                                >
                                    {word}&nbsp;
                                </motion.span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollFillText;