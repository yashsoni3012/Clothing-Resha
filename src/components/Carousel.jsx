import React from 'react';
import heroImage from '../assets/banner.jpg';
import fashionVideo from '../assets/banner_video.mp4';
import img1 from '../assets/show_case1.jpeg';
import img2 from '../assets/bannerBg2.jpeg';
import img3 from '../assets/bannerBg3.jpeg';

const Carousel = () => {
  return (
    <div className="relative w-full overflow-hidden text-white">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 pt-24 pb-16">
        {/* Video + Text Row */}
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg">
          {/* Left: Video */}
          <div className="relative w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-[450px]">
            <video
              src={fashionVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-l-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent rounded-l-xl" />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 bg-black p-6 sm:p-10 flex flex-col justify-center rounded-r-xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-wide text-white">
              TIMELESS DESIGN
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl mt-2 text-white">
              PREMIUM MATERIAL
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white">
              Crafted for elegance and built to last.<br />
              Discover quality that never goes out of style.
            </p>
            <button className="mt-6 border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base w-fit">
              LEARN MORE &gt;
            </button>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[img1, img2, img3].map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full h-80 object-cover object-top"
              />
              <div className="absolute inset-0 bg-[#a0522d]/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="text-center px-4 text-white">
                  <h5 className="text-sm md:text-base mb-1 uppercase tracking-widest">Category</h5>
                  <h1 className="text-xl md:text-2xl font-bold">Stylish Collection {index + 1}</h1>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
