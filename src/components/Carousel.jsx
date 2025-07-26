import React, { useState, useEffect } from "react";
import heroImage from "../assets/banner.jpg";
import fashionVideo from "../assets/banner_video.mp4";
import logo from "../assets/logo_resha.png";
import img1 from "../assets/show_case1.jpeg";
import img2 from "../assets/bannerBg2.jpeg";
import img3 from "../assets/bannerBg3.jpeg";

const Carousel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = ["Home", "About", "Collection", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative w-full overflow-hidden text-white font-sans">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-5/6 sm:w-1/2 z-50 p-6 pt-24 transition-transform duration-300 ease-in-out transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgb(109, 13, 47), rgb(26, 26, 26))",
        }}
      >
        <ul className="flex flex-col gap-6">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="text-lg font-semibold px-4 py-2"
              onClick={() => setSidebarOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-white text-white placeholder-white bg-black/50 rounded-full outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>

      {/* Glassmorphism Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-16 py-3 border border-white/20 bg-white/10 backdrop-blur-md rounded-b-2xl shadow-lg">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto sm:h-14 md:h-16"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 px-4 py-2 rounded-full">
            <ul className="flex gap-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group px-6 py-2 text-white font-semibold text-xl md:text-2xl lg:text-xl rounded-full transition duration-300 cursor-pointer hover:bg-white hover:bg-opacity-20"
                >
                  {item}
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-1 border border-white text-white placeholder-white bg-white/10 backdrop-blur-sm rounded-full outline-none focus:ring-2 focus:ring-white transition"
            />
          </div>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle Sidebar"
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {sidebarOpen ? (
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

      {/* Content Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 pt-28 pb-16">
        {/* Video + Text Row */}
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <div className="relative w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-[450px]">
            <video
              src={fashionVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-l-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/10 rounded-l-xl" />
          </div>

          <div className="w-full md:w-1/2 bg-black p-6 sm:p-10 flex flex-col justify-center rounded-r-xl relative">
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/100 to-black/0" />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-wide">
              TIMELESS DESIGN
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl mt-2">
              PREMIUM MATERIAL
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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
                <div className="text-center px-4">
                  <h5 className="text-sm md:text-base mb-1 uppercase tracking-widest">
                    Category
                  </h5>
                  <h1 className="text-xl md:text-2xl font-bold">
                    Stylish Collection {index + 1}
                  </h1>
                </div>
              </div>
              <div className="absolute top-4 left-4 border-white border-[2px] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
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
