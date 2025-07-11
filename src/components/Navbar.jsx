import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_resha.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // Frosted Glass Effect
  const glassStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {/* Glass Nav Container */}
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

            {/* Search Bar */}
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
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 text-white z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
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

      {/* Background Overlay */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
