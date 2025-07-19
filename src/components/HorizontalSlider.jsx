import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

const HorizontalScrollSection = () => {
  // Mock images
  const img1 = "https://images.unsplash.com/photo-1520637836862-4d197d17c962?w=800&h=1200&fit=crop";
  const img2 = "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1200&fit=crop";
  const img3 = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1200&fit=crop";
  const img4 = "https://images.unsplash.com/photo-1595475038665-8ad532f48e8f?w=800&h=1200&fit=crop";
  const img5 = "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=1200&fit=crop";

  const sections = [
    {
      type: "textWithImage",
      content: "But to us, the crafters of one of the most intimate parts of your life, you are our world.",
      src: img2,
    },
    {
      type: "imagePair",
      src1: img1,
      src2: img5,
    },
    { 
      type: "text", 
      content: "Explore Amazing Views",
      subtitle: "Discover the beauty in every moment"
    },
    { type: "image", src: img3 },
    { type: "image", src: img4 },
    { 
      type: "text", 
      content: "Thank You for Scrolling",
      subtitle: "Your journey matters to us"
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
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080
  });

  // Progress indicator
  const scrollProgress = useTransform(
    smoothScroll,
    [0, -dimensions.width * sections.length * 0.75],
    [0, 1],
    { clamp: true }
  );

  const handleResize = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const totalScrollHeight = dimensions.width * sections.length * 0.7;

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
            const progress = Math.min(Math.max((scrollTop - start) / (end - start), 0), 1);
            const smoothProgress = progress * progress * (3 - 2 * progress);
            const newX = -smoothProgress * dimensions.width * sections.length * 0.75;
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
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 z-50"
        style={{
          width: useTransform(scrollProgress, [0, 1], ["0%", "100%"]),
        }}
      />

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
        <div className="sticky top-0 h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <motion.div
            className="flex h-full"
            style={{
              width: `${sections.length * 75}vw`,
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
                    className="w-[80vw] flex flex-col lg:flex-row gap-8 items-center justify-center p-8 text-white relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10 rounded-3xl" />
                    
                    <div className="flex-1 z-10">
                      <motion.p 
                        className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
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
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                      <img
                        src={item.src}
                        alt={`section-${index}`}
                        className="relative max-h-[600px] w-[400px] rounded-2xl object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
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
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                      <img
                        src={item.src1}
                        alt={`pair-left-${index}`}
                        className="relative h-[70vh] w-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="relative group flex-1"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.4 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                      <img
                        src={item.src2}
                        alt={`pair-right-${index}`}
                        className="relative h-[70vh] w-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20 rounded-3xl" />
                    
                    <motion.h2 
                      className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent z-10"
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
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                      <img
                        src={item.src}
                        alt={`section-${index}`}
                        className="relative max-h-[80vh] max-w-[600px] rounded-2xl object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  </motion.div>
                );
              }
            })}
          </motion.div>
        </div>
      </div>

      {/* Section Indicators */}
      {/* <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
        {sections.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-8 bg-white/20 rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="w-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"
              style={{
                height: useTransform(
                  scrollProgress,
                  [index / sections.length, (index + 1) / sections.length],
                  ["0%", "100%"]
                ),
              }}
            />
          </motion.div>
        ))}
      </div> */}
    </div>
  );
};

export default HorizontalScrollSection;