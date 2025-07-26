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
        <div className="h-[50vh] bg-[#FFF9EC] flex items-center justify-center">
            <div
                ref={ref}
                className="min-h-[50vh] w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-[30px]"
            >
                <div className="flex flex-wrap max-w-8xl text-center justify-start text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-relaxed">
                    {/* RESHA WEARS small text */}
                    <span className="text-xs sm:text-sm md:text-base font-bold mr-1 sm:mr-2 self-end pb-2 sm:pb-3 md:pb-4 lg:pb-5">
                        RESHA WEARS
                    </span>

                    {/* Main text with first word indentation */}
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
                                className={`${index === 0 ? 'ml-4 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-40' : ''} mx-[0.5px] sm:mx-[1px] md:mx-[1.5px]`}
                            >
                                {word}&nbsp;
                            </motion.span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ScrollFillText;