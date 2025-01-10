import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const CustomNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to close the mobile menu
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Gym Logo" className="h-10 mr-3" />
          <span className="text-xl font-bold">SSKingdom</span>
        </a>
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden text-white focus:outline-none transform transition-transform hover:text-yellow-500 hover:scale-110 ${
            isMobileMenuOpen ? "rotate-90" : "rotate-0"
          }`}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Links Section */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute lg:static bg-black w-full lg:w-auto top-full left-0 lg:top-auto lg:left-auto`}
        >
          <Link
            to="/"
            className="block lg:inline-block text-white mx-2 py-2 hover:text-red-500 transition-transform transform hover:scale-110"
            onClick={closeMenu} // Close the menu when clicked
          >
            Home
          </Link>
          <Link
            to="/testimonials"
            className="block lg:inline-block text-white mx-2 py-2 hover:text-red-500 transition-transform transform hover:scale-110"
            onClick={closeMenu}
          >
            Testimonials
          </Link>
          <Link
            to="/gallery"
            className="block lg:inline-block text-white mx-2 py-2 hover:text-red-500 transition-transform transform hover:scale-110"
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            to="/events"
            className="block lg:inline-block text-white mx-2 py-2 hover:text-red-500 transition-transform transform hover:scale-110"
            onClick={closeMenu}
          >
            Events
          </Link>
          <Link
            to="/about"
            className="block lg:inline-block text-white mx-2 py-2 hover:text-red-500 transition-transform transform hover:scale-110"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/authentication"
            className="block lg:inline-block bg-yellow-500 text-black font-bold mx-2 px-3 py-1 rounded hover:bg-yellow-600 transform hover:scale-110 transition-all"
            onClick={closeMenu}
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
