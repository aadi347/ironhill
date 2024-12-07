import React, { useState } from "react";
import logo from "../assets/images/iron-hill-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-black fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-64">
        {/* Left Section */}
        <div className="hidden lg:flex gap-14">
          <a
            href="#"
            className="text-lg font-bold uppercase tracking-wider text-black hover:underline hover:decoration-2 hover:decoration-orange-400"
          >
            Craft Beer
          </a>
          <a
            href="#"
            className="text-lg font-bold uppercase tracking-wider text-black hover:underline hover:decoration-2 hover:decoration-orange-400"
          >
            Brew Houses
          </a>
        </div>

        {/* Center Section (Logo) */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Iron Hill Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex gap-8">
          <a
            href="#"
            className="text-lg font-bold uppercase tracking-wider text-black hover:underline hover:decoration-2 hover:decoration-orange-400"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-lg font-bold uppercase tracking-wider text-black hover:underline hover:decoration-2 hover:decoration-orange-400"
          >
            Franchise
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden w-full mt-4">
            <ul className="flex flex-col items-center gap-4">
              <li>
                <a
                  href="#"
                  className="text-lg font-bold uppercase tracking-wider text-black hover:underline hover:decoration-2 hover:decoration-orange-400"
                >
                  Craft Beer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg font-bold uppercase tracking-wider text-black hover:underline hover:decoration-2 hover:decoration-orange-400"
                >
                  Brew Houses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg font-bold uppercase tracking-wider text-black hover:underline hover:decoration-2 hover:decoration-orange-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg font-bold uppercase tracking-wider text-black hover:underline hover:decoration-2 hover:decoration-orange-400"
                >
                  Franchise
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
