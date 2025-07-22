import React from 'react';
import '../../src/CubeSlide.css'; // Ensure this file contains the required animation

const BookConsultation = () => {
  return (
    <div className="w-full bg-[#fdf7eb] py-10 sm:py-16">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 border-y border-[#ce3737] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0">

        {/* Left Section with repeat animation */}
        <div className="flex items-center gap-2 sm:gap-4 cursor-pointer group overflow-hidden">
          <span className="text-red-500 text-xl sm:text-2xl">&#10140;</span>

          <div className="relative h-10 sm:h-14 overflow-hidden">
            <div className="repeat-text text-2xl sm:text-4xl md:text-5xl font-bold text-red-500 group-hover:animate-repeatText whitespace-nowrap">
              BOOK CONSULTATION
            </div>
          </div>
        </div>

        {/* Right Section underline */}
        <div className="relative group cursor-pointer">
          <span className="text-red-500 text-sm sm:text-base font-medium tracking-wide">
            BOOK NOW
          </span>
          <div className="absolute left-0 bottom-0 w-full h-[1px] bg-red-500 transition-all duration-500 group-hover:w-0" />
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
