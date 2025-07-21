import React from 'react';
import wigImage from '../assets/letswigout.webp'; // Replace with your actual image path

const LetsWigOut = () => {
  return (
    <div className="w-full pb-10 pt-10" style={{ backgroundColor: '#FFF9EC' }}>
      {/* Max width container */}
      <div className="max-w-[1536px] mx-auto flex flex-col md:flex-row items-start justify-start gap-6 px-4">
        
        {/* Text Section */}
        <div className="text-[#800000] w-full">
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-left">
            LET’S WIG
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-left">
              OUT
            </p>

            {/* Image beside "OUT" */}
            <img
              src={wigImage}
              alt="Wig"
              className="h-[80px] w-[180px] sm:h-[100px] sm:w-[240px] object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default LetsWigOut;
