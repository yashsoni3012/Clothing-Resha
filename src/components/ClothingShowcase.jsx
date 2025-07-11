import React from "react";
import bgImage from "../assets/banner.jpg";
import img1 from "../assets/show_case1.jpeg";
import img2 from "../assets/show_case2.jpeg";

const ClothingShowcase = () => {
  return (
    <div className="relative w-full text-white py-16 px-4 sm:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Black Top Shadow */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/60 to-transparent z-0" />

      {/* Black Bottom Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />

      {/* Optional slight white blur overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Discover Your Style
          </h1>
          <p className="text-lg max-w-xl mx-auto">
            Uncover elegance, comfort, and class in every stitch.
          </p>
        </div>

        {/* Section 1 - Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <img
              src={img1}
              alt="Elegant Wear"
              className="w-full h-[500px] object-cover object-top rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">
              Elegant Everyday Wear
            </h2>
            <p className="text-md">
              Experience fashion that flows with you. Our daily collection is
              designed for comfort and sophistication.
            </p>
          </div>
        </div>

        {/* Section 2 - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2">
            <img
              src={img2}
              alt="Statement Piece"
              className="w-full h-[500px] object-cover object-top rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">Statement Pieces</h2>
            <p className="text-md">
              From bold prints to minimal must-haves, find pieces that speak
              your personality and make every outfit unique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingShowcase;
