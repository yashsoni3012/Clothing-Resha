import React from "react";
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo_resha.png"; // Update path if needed

const Footer = () => {
  return (
    <footer
      className="text-white px-6 pt-10 pb-4"
      style={{
        background: "linear-gradient(to bottom, #1A1A1A,  #6D0D2F)",
      }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {/* Column 1 */}
        <div>
          <img src={logo} alt="Logo" className="w-24 mx-auto mb-4" />
          <p className="text-sm mb-4 px-4">
            Discover timeless elegance and everyday comfort in our curated
            clothing collections.
          </p>
          <div className="flex justify-center mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-l-md text-black w-full max-w-[200px]"
            />
            <button className="bg-white text-[#6D0D2F] px-4 py-2 rounded-r-md font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Collection
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li>Custom Tailoring</li>
            <li>Wedding Outfits</li>
            <li>Seasonal Collections</li>
            <li>Accessories & Styling</li>
          </ul>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full">
              <FaWhatsapp size={18} />
            </a>
            <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full">
              <FaPhoneAlt size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Always Bottom Line */}
      <div className="text-center text-sm font-bold mt-8 opacity-70">
        © All rights reserved. House Of Resha
      </div>
    </footer>
  );
};

export default Footer;
