// ClothingTextSection.jsx
import React from "react";

const ClothingTextSection = () => {
  return (
    <div className="py-12 md:py-16 px-4 sm:px-6" style={{ backgroundColor: "#FFF9EC" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 leading-tight"
          style={{ color: "#800000" }}
        >
          Elevate Your Wardrobe
        </h1>

        <p className="text-base sm:text-lg mb-3 sm:mb-4" style={{ color: "#800000" }}>
          Welcome to <span className="font-semibold">UrbanWear</span> – where
          fashion meets function. Explore our premium collection of everyday
          essentials, statement pieces, and season-ready styles.
        </p>
        <p className="text-sm sm:text-md" style={{ color: "#800000" }}>
          Designed for comfort. Styled for confidence. Tailored for you.
        </p>
      </div>
    </div>
  );
};

export default ClothingTextSection;