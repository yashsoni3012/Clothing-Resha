// import React, { useEffect, useRef, useState, useCallback } from "react";
// import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

// // Import images from local assets
// import img1 from "../assets/ImageGrid1.jpeg";
// import img2 from "../assets/ImageGrid1.jpeg";
// import img3 from "../assets/ImageGrid1.jpeg";
// import img4 from "../assets/ImageGrid1.jpeg";
// import img5 from "../assets/ImageGrid1.jpeg";
// import wigImage from "../assets/ImageGrid1.jpeg";

// const HorizontalScrollSection = () => {
//   const sections = [
//     {
//       type: "textWithImage",
//       content: "But to us, the crafters of one  of the most intimate parts of your life, you are our world.",
//       src: img2,
//     },
//     {
//       type: "imagePair",
//       src1: img1,
//       src2: img5,
//     },
//     {
//       type: "text",
//       content: "Explore Amazing Views",
//       subtitle: "Discover the beauty in every moment"
//     },
//     { type: "image", src: img3 },
//     { type: "image", src: img4 },
//     {
//       type: "text",
//       content: "Thank You for Scrolling",
//       subtitle: "Your journey matters to us"
//     },
//   ];

//   const containerRef = useRef(null);
//   const scrollY = useMotionValue(0);
//   const smoothScroll = useSpring(scrollY, {
//     stiffness: 80,
//     damping: 40,
//     mass: 0.5,
//     restDelta: 0.001,
//     restSpeed: 0.01,
//   });

//   const [dimensions, setDimensions] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1920,
//     height: typeof window !== 'undefined' ? window.innerHeight : 1080
//   });

//   const scrollProgress = useTransform(
//     smoothScroll,
//     [0, -dimensions.width * sections.length * 0.75],
//     [0, 1],
//     { clamp: true }
//   );

//   const handleResize = useCallback(() => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight
//     });
//   }, []);

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [handleResize]);

//   const totalScrollHeight = dimensions.width * sections.length * 0.7;

//   useEffect(() => {
//     let ticking = false;

//     const onScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           if (!containerRef.current) return;

//           const rect = containerRef.current.getBoundingClientRect();
//           const scrollTop = window.scrollY;
//           const offsetTop = window.scrollY + rect.top;
//           const start = offsetTop;
//           const end = offsetTop + totalScrollHeight - dimensions.width;

//           if (scrollTop >= start && scrollTop <= end) {
//             const progress = Math.min(Math.max((scrollTop - start) / (end - start), 0), 1);
//             const smoothProgress = progress * progress * (3 - 2 * progress);
//             const newX = -smoothProgress * dimensions.width * sections.length * 0.75;
//             scrollY.set(newX);
//           }

//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [scrollY, totalScrollHeight, dimensions.width]);

//   return (
//     <div className="relative bg-gray-900">
//       <section className="min-h-screen flex items-center justify-start px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/30" />
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="relative z-10"
//         >
//           <h1 className="text-white text-left font-bold leading-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
//             <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
//               We're not
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
//               changing the
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
//               world, we sell
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
//               wigs.
//             </span>
//           </h1>
//         </motion.div>
//       </section>

//       <div
//         ref={containerRef}
//         style={{ height: `${totalScrollHeight + dimensions.height}px` }}
//       >
//         <div className="sticky top-0 h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
//           <motion.div
//             className="flex h-full"
//             style={{ width: `${sections.length * 75}vw`, x: smoothScroll }}
//             transition={{ type: "spring", stiffness: 80, damping: 40, mass: 0.5 }}
//           >
//             {sections.map((item, index) => {
//               if (item.type === "textWithImage") {
//                 return (
//                   <motion.div
//                     key={index}
//                     className="w-[80vw] flex flex-col gap-6 md:gap-8 items-center md:items-start justify-center p-4 sm:p-8 text-white relative"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: index * 0.2 }}
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10 rounded-3xl" />
//                     <motion.p
//                       className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent z-10"
//                       initial={{ opacity: 0, x: -50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.3 }}
//                     >
//                       {item.content}
//                     </motion.p>
//                     <motion.div
//                       className="relative group self-center md:self-end z-10"
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: index * 0.4 }}
//                     >
//                       <img
//                         src={item.src}
//                         alt={`section-${index}`}
//                         className="relative max-h-[400px] md:max-h-[600px] w-[90vw] md:w-[400px] object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
//                       />
//                     </motion.div>
//                   </motion.div>
//                 );
//               } else if (item.type === "imagePair") {
//                 return (
//                   <motion.div
//                     key={index}
//                     className="w-[80vw] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-4 sm:px-8 md:px-10 mt-10 md:mt-16"
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.2 }}
//                   >
//                     <motion.div
//                       className="relative group w-full md:w-1/2"
//                       initial={{ opacity: 0, x: -100 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.3 }}
//                     >
//                       <img
//                         src={item.src1}
//                         alt={`image-${index}`}
//                         className="relative h-[50vh] md:h-[70vh] w-full object-cover object-top rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
//                       />
//                     </motion.div>
//                     <div className="w-full md:w-1/2 flex flex-col gap-4">
//                       <motion.p
//                         className="text-2xl md:text-4xl lg:text-5xl font-light text-white bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-snug"
//                         initial={{ opacity: 0, x: 100 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.4 }}
//                       >
//                         SO yes, people may think we go overboard when we handpick every strand of hair before we start creating your wig.
//                       </motion.p>
//                       <motion.p
//                         className="text-base md:text-lg font-normal text-white leading-relaxed"
//                         initial={{ opacity: 0, x: 100 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.5 }}
//                       >
//                         Or that we do all the construction, customization and coloring ourselves, even carrying every size and style in stock at all times to ensure the wig you try on is the wig you walk out with. Because we believe you deserve a wig that's as perfect as you are.
//                       </motion.p>
//                     </div>
//                   </motion.div>
//                 );
//               } else if (item.type === "text") {
//                 return (
//                   <motion.div
//                     key={index}
//                     className="w-[80vw] sm:w-[60vw] md:w-[40vw] h-[50vw] md:h-[35vw] flex items-center justify-center p-2 text-white text-center relative"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: index * 0.2 }}
//                   >
//                     <motion.img
//                       src={wigImage}
//                       alt="wig image"
//                       className="relative w-full h-full object-cover z-10"
//                       initial={{ opacity: 0, y: -30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.3 }}
//                     />
//                   </motion.div>
//                 );
//               } else {
//                 return (
//                   <motion.div
//                     key={index}
//                     className="w-[80vw] sm:w-[60vw] md:w-[35vw] flex items-center justify-center p-2 relative"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: index * 0.2 }}
//                   >
//                     <motion.div
//                       className="relative group"
//                       initial={{ opacity: 0, rotate: -10 }}
//                       animate={{ opacity: 1, rotate: 0 }}
//                       transition={{ delay: index * 0.3 }}
//                     >
//                       <div className="absolute inset-0" />
//                     </motion.div>
//                   </motion.div>
//                 );
//               }
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScrollSection;


import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import img1 from "../assets/ImageGrid1.jpeg";
import guy1 from "../assets/poster images/poster7.png";
import guy2 from "../assets/poster images/poster7.png";
import guy3 from "../assets/poster images/poster3.png";
import girl1 from "../assets/poster images/poster4.png";
import girl2 from "../assets/poster images/poster5.png";
import girl3 from "../assets/poster images/poster6.png";


const HorizontalScrollSection = () => {
  const sections = [
    {
      type: "textWithImage",
      content: "But to us, the crafters of one of the most intimate parts of your life, you are our world.",
      src: guy1,
      layout: "reverse", // NEW: to flip text/image
    },
    {
      type: "textWithImage",
      content: "We believe comfort and beauty go hand-in-hand.",
      src: guy3,
      layout: "vertical", // NEW: image below text
    },
    {
      type: "text",
      content: "Crafted for Your World",
      subtitle: "Every element tells your story.",
    },
    // original ones below
    {
      type: "textWithImage",
      content:
        "But to us, the crafters of one of the most intimate parts of your life, you are our world.",
      src: girl3,
    },
    {
      type: "imagePair",
      src1: guy2,
      src2: girl2,
    },
    {
      type: "text",
      content: "Explore Amazing Views",
      subtitle: "Discover the beauty in every moment",
    },
    { type: "image", src: girl1 },
    { type: "image", src: img1 },
    {
      type: "text",
      content: "Designed to Be Remembered",
      subtitle:
        "Because your presence deserves more than just a look—it deserves a legacy.",
    },
  ];

  const containerRef = useRef(null);
  const scrollY = useMotionValue(0);
  const smoothScroll = useSpring(scrollY, {
    stiffness: 80,
    damping: 40,
    mass: 0.5,
    restDelta: 0.001,
    restSpeed: 0.01,
  });

  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080,
  });

  // Progress indicator
  const scrollProgress = useTransform(
    smoothScroll,
    [0, -dimensions.width * sections.length * 0.5],
    [0, 1],
    { clamp: true }
  );

  const handleResize = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const totalScrollHeight = dimensions.width * sections.length * 0.3;

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) return;

          const rect = containerRef.current.getBoundingClientRect();
          const scrollTop = window.scrollY;
          const offsetTop = window.scrollY + rect.top;
          const start = offsetTop;
          const end = offsetTop + totalScrollHeight - dimensions.width;

          if (scrollTop >= start && scrollTop <= end) {
            const progress = Math.min(
              Math.max((scrollTop - start) / (end - start), 0),
              1
            );
            const smoothProgress = progress * progress * (3 - 2 * progress);
            const newX =
              -smoothProgress * dimensions.width * sections.length * 0.5;
            scrollY.set(newX);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY, totalScrollHeight, dimensions.width]);

  return (
    <div className="relative bg-gray-900">


      {/* Intro Section */}
      <section className="min-h-screen flex items-center justify-start px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-white text-left font-bold leading-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              We're not
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              changing the
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              world, we sell
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              wigs.
            </span>
          </h1>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.6, 0.2, 0.6],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <div
        ref={containerRef}
        style={{
          height: `${totalScrollHeight + dimensions.height}px`,
        }}
      >
        {/* ✨ Floating animated background bubbles */}
        <div className="sticky top-0 h-screen w-screen overflow-hidden bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0.6, 0.2, 0.6],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
              />
            ))}
          </div>

          {/* ✅ Existing animated horizontal scroll section */}
          <motion.div
            className="flex h-full"
            style={{
              width: `${sections.length * 60}vw`,
              x: smoothScroll,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 40,
              mass: 0.5,
            }}
          >
            {sections.map((item, index) => {
              const isEven = index % 2 === 0;

              if (item.type === "textWithImage") {
                return (
                  <motion.div
                    key={index}
                    className={`w-[60vw] flex ${item.layout === "vertical"
                      ? "flex-col"
                      : item.layout === "reverse"
                        ? "lg:flex-row-reverse"
                        : "lg:flex-row"
                      } gap-8 items-center justify-center p-8 text-white relative`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex-1 z-10">
                      <motion.p
                        className="text-2xl md:text-4xl lg:text-5xl p-9 font-light leading-relaxed bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3 }}
                      >
                        {item.content}
                      </motion.p>
                    </div>

                    <motion.div
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.4 }}
                    >
                      <img
                        src={item.src}
                        alt={`section-${index}`}
                        className="object-top relative max-h-[600px] w-[400px] object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  </motion.div>
                );
              } else if (item.type === "imagePair") {
                return (
                  <motion.div
                    key={index}
                    className="w-[80vw] flex items-center justify-center gap-8 px-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.div
                      className="relative group flex-1"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3 }}
                    >
                      <img
                        src={item.src1}
                        alt={`pair-left-${index}`}
                        className="object-top relative h-[70vh] w-full object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>

                    <motion.div
                      className="relative group flex-1"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.4 }}
                    >
                      <img
                        src={item.src2}
                        alt={`pair-right-${index}`}
                        className="object-top relative h-[70vh] w-full object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  </motion.div>
                );
              } else if (item.type === "text") {
                return (
                  <motion.div
                    key={index}
                    className="w-[80vw] flex flex-col items-center justify-center p-8 text-white text-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.h2
                      className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 pb-3 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent z-10"
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.3 }}
                    >
                      {item.content}
                    </motion.h2>

                    {item.subtitle && (
                      <motion.p
                        className="text-lg md:text-xl text-gray-300 z-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.4 }}
                      >
                        {item.subtitle}
                      </motion.p>
                    )}
                  </motion.div>
                );
              } else {
                return (
                  <motion.div
                    key={index}
                    className="w-[80vw] flex items-center justify-center p-8 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.div
                      className="relative group"
                      initial={{ opacity: 0, rotate: -10 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: index * 0.3 }}
                    >
                      <img
                        src={item.src}
                        alt={`section-${index}`}
                        className="object-top relative max-h-[80vh] max-w-[600px] object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  </motion.div>
                );
              }
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;