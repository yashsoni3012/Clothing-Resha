import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_resha.png";
import heroImage from "../assets/banner.jpg";
import fashionVideo from "../assets/banner_video.mp4";
import img1 from "../assets/show_case1.jpeg";
import img2 from "../assets/bannerBg2.jpeg";
import img3 from "../assets/bannerBg3.jpeg";

const HeroWithNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const glassStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
  };

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

      {/* Navbar (non-sticky) */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-20"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <div
              className="flex gap-6 px-10 py-2 rounded-full items-center text-sm lg:text-base font-medium"
              style={glassStyle}
            >
              {["HOME", "ABOUT", "CONTACT"].map((item, index) => (
                <li
                  key={index}
                  className="relative list-none group cursor-pointer"
                >
                  {item}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </li>
              ))}
            </div>

            {/* Search */}
            <div className="relative ml-4">
              <input
                type="text"
                placeholder="SEARCH"
                className="pl-4 pr-10 py-1 rounded-full text-white placeholder-white/70 text-sm lg:text-base border border-white focus:outline-none focus:ring-2 focus:ring-white"
                style={glassStyle}
              />
              <svg
                className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} aria-label="Toggle menu">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 text-white z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{
          background: "linear-gradient(to bottom, #6D0D2F, #1A1A1A)",
        }}
      >
        <div className="p-6 pt-24 flex flex-col gap-6">
          {["Home", "About", "Contact"].map((text, index) => (
            <a
              key={index}
              href="#"
              onClick={closeSidebar}
              className="relative group text-lg font-semibold px-4 py-2 rounded-xl transition duration-300"
              style={glassStyle}
            >
              {text}
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}

          {/* Mobile Search */}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="SEARCH"
              className="pl-4 pr-10 py-2 w-full rounded-full text-white placeholder-white/70 border border-white focus:outline-none focus:ring-2 focus:ring-white"
              style={glassStyle}
            />
            <svg
              className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Background Overlay */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Content Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 pt-12 pb-16">
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
              Crafted for elegance and built to last.
              <br />
              Discover quality that never goes out of style.
            </p>
            <button className="mt-6 border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base w-fit">
              LEARN MORE &gt;
            </button>
          </div>
        </div>

        {/* Image Grid */}
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
                  <h5 className="text-sm md:text-base mb-1 uppercase tracking-widest">
                    Category
                  </h5>
                  <h1 className="text-xl md:text-2xl font-bold">
                    Stylish Collection {index + 1}
                  </h1>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-transparent border-white border-[2px] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroWithNavbar;
