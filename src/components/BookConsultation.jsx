import React from 'react';
import '../../src/CubeSlide.css'; // You must create this file


const BookConsultation = () => {
  return (
    <div className="w-full bg-[#fdf7eb] py-6">
      <div className="max-w-[1536px] mx-auto px-6 border-y border-[#fcd6c8] flex items-center justify-between">
        
        {/* Left Section with repeat animation */}
        <div className="flex items-center gap-4 cursor-pointer group overflow-hidden">
          <span className="text-red-500 text-2xl">&#10140;</span>

          <div className="relative h-10 overflow-hidden">
            <div className="repeat-text text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 group-hover:animate-repeatText">
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
