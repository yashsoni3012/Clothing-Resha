import React, { useEffect, useRef } from "react";
import img1 from "../assets/sliderImg1.jpeg";
import img2 from "../assets/sliderImg2.jpeg";
import img3 from "../assets/sliderImg3.jpeg";

const images = [img1, img2, img3];

const MaroonSlider = () => {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const intervalId = useRef(null);

  const imageWidth = 200;
  const gap = 24;
  const step = imageWidth + gap;

  const startAutoScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    intervalId.current = setInterval(() => {
      if (isDragging.current) return;

      const maxScroll = slider.scrollWidth / 2;

      if (slider.scrollLeft + step >= maxScroll) {
        slider.scrollTo({ left: 0, behavior: "auto" });
      } else {
        slider.scrollTo({
          left: slider.scrollLeft + step,
          behavior: "smooth",
        });
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalId.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e) => {
      isDragging.current = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.classList.add("cursor-grabbing");
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
  }, []);

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
              <p className="font-bold text-base mb-6 leading-relaxed">
                IT ALL STARTS WITH HAIR, THE HIGHEST QUALITY EUROPEAN HAIR
              </p>
            </div>
            <button className="bg-gray-600 hover:bg-gray-700 text-sm text-white font-semibold px-12 py-4 rounded-full transition w-fit mt-2">
              BOOK NOW
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
              {[...images, ...images].map((img, index) => (
                <div
                  key={index}
                  className="w-[200px] h-[200px] rounded-[15px] overflow-hidden shadow-md flex-shrink-0 border-[5px] border-white"
                >
                  <img
                    src={img}
                    alt={`img-${index}`}
                    className="w-full h-full object-cover object-top rounded-[5px] transition-transform duration-300 ease-in-out hover:scale-[1.07]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Light Maroon HR */}
        <hr className="border-t-4 border-[#800000] opacity-40 mt-12 w-full" />
      </div>
    </div>
  );
};

export default MaroonSlider;
