import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/sliderImg1.jpeg";
import img2 from "../assets/sliderImg2.jpeg";
import img3 from "../assets/sliderImg3.jpeg";

const images = [img1, img2, img3];

const MaroonSlider = () => {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const animationFrameId = useRef(null);
  const [sliderReady, setSliderReady] = useState(false);

  // Clone images for seamless looping (original + clone)
  const sliderImages = [...images, ...images];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Initialize slider at halfway point (clone start)
    slider.scrollLeft = images.length * 224; // 200px width + 24px gap
    setSliderReady(true);

    const startAutoScroll = () => {
      const smoothScroll = () => {
        if (isDragging.current || !sliderReady) return;
        
        const slider = sliderRef.current;
        if (!slider) return;

        // If we've scrolled to the clone section, instantly reset to original
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += 1;
        }

        animationFrameId.current = requestAnimationFrame(smoothScroll);
      };

      animationFrameId.current = requestAnimationFrame(smoothScroll);
    };

    startAutoScroll();

    const handleDrag = () => {
      let startX = 0;
      let scrollLeft = 0;

      const onMouseDown = (e) => {
        isDragging.current = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.classList.add("cursor-grabbing");
        cancelAnimationFrame(animationFrameId.current);
      };

      const onMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
      };

      const onMouseUp = () => {
        isDragging.current = false;
        slider.classList.remove("cursor-grabbing");
        startAutoScroll();
      };

      slider.addEventListener("mousedown", onMouseDown);
      slider.addEventListener("mousemove", onMouseMove);
      slider.addEventListener("mouseup", onMouseUp);
      slider.addEventListener("mouseleave", onMouseUp);

      return () => {
        slider.removeEventListener("mousedown", onMouseDown);
        slider.removeEventListener("mousemove", onMouseMove);
        slider.removeEventListener("mouseup", onMouseUp);
        slider.removeEventListener("mouseleave", onMouseUp);
      };
    };

    const cleanup = handleDrag();

    return () => {
      cleanup();
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [sliderReady]);

  return (
    <div className="w-full bg-[#f9f9f4] py-12 px-4 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 relative z-10 w-full">

          {/* Maroon Box */}
          <div
            className="text-white rounded-3xl p-8 min-h-[320px] flex flex-col justify-between items-center text-center z-0 relative w-full lg:w-[500px]"
            style={{
              background: "linear-gradient(to bottom, #6D0D2F, #1A1A1A)",
            }}
          >
            <div className="max-w-xs">
              <h2 className="text-5xl mb-5 text-start">
                HERE'S YOUR <span className="font-bold">HOR</span>
              </h2>
              <p className="text-base mb-6 text-start leading-relaxed">
                IT ALL STARTS WITH HAIR, THE HIGHEST QUALITY EUROPEAN HAIR
              </p>
            </div>
            <button className="group flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-white transition-all duration-300">
              <div className="relative">
                <span className="font-medium">BOOK NOW</span>
                <span className="absolute left-1/2 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 origin-center group-hover:left-0 group-hover:w-full"></span>
              </div>
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Image Slider */}
          <div
            ref={sliderRef}
            className="overflow-x-auto overflow-y-hidden whitespace-nowrap cursor-grab relative z-10 w-full lg:w-[648px] -ml-0 lg:-ml-32"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>
              {`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            <div className="inline-flex gap-6 items-center justify-center px-2">
              {sliderImages.map((img, index) => (
                <div
                  key={index}
                  className="w-[200px] h-[200px] rounded-[15px] overflow-hidden shadow-md flex-shrink-0 border-[5px] border-white"
                >
                  <img
                    src={img}
                    alt={`img-${index % images.length}`}
                    className="w-full h-full object-cover object-top rounded-[5px] transition-transform duration-300 ease-in-out hover:scale-[1.07]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-t-4 border-[#800000] opacity-40 mt-12 w-full" />
      </div>
    </div>
  );
};

export default MaroonSlider;