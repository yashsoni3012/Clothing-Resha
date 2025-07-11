import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/logo_resha.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo with Link */}
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-23"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <ul className="flex gap-2 lg:gap-4 text-sm lg:text-base font-medium">
              <li className="px-4 py-1 rounded-full bg-gray-700 text-white">
                HOME
              </li>
              <li className="px-4 py-1 rounded-full hover:bg-gray-700 hover:text-white transition cursor-pointer">
                ABOUT
              </li>
              <li className="px-4 py-1 rounded-full hover:bg-gray-700 hover:text-white transition cursor-pointer">
                CONTACT
              </li>
            </ul>

            {/* Search Bar */}
            <div className="relative ml-2">
              <input
                type="text"
                placeholder="SEARCH"
                className="pl-4 pr-10 py-1 rounded-full 
                  bg-white/10 text-white 
                  placeholder-white/70 
                  text-sm lg:text-base 
                  backdrop-blur-md border border-white/60
                  focus:outline-none focus:ring-2 focus:ring-white"
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
          <a
            href="#"
            className="hover:underline text-lg"
            onClick={closeSidebar}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:underline text-lg"
            onClick={closeSidebar}
          >
            About
          </a>
          <a
            href="#"
            className="hover:underline text-lg"
            onClick={closeSidebar}
          >
            Contact
          </a>

          {/* Mobile Search */}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="SEARCH"
              className="pl-4 pr-10 py-2 w-full rounded-full
                bg-white/10 text-white
                placeholder-white/70
                backdrop-blur-md border border-white/20
                focus:outline-none focus:ring-2 focus:ring-white"
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
