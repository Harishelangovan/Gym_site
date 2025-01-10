import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
    <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">

      {/* Left Section: Contact Info & Social Media */}
      <div className="md:w-1/4 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Contact Us</h2>
        <p className="mb-2">Phone: +1 234 567 890</p>
        <p className="mb-2">Email: contact@gymname.com</p>
        <p className="mb-4">Address: 123 Fitness Street, Healthy City, Fitland</p>
        <div className="flex justify-center gap-6 mt-6 mb-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="relative w-14 h-14 flex items-center justify-center bg-white text-3xl text-gray-700 rounded-full border-3 border-white transition-all transform hover:scale-125 hover:bg-blue-600 hover:text-white"
          >
            <FaFacebookF />
            <span className="absolute inset-0 bg-blue-600 transition-all transform top-full hover:top-0"></span>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="relative w-14 h-14 flex items-center justify-center bg-white text-3xl text-gray-700 rounded-full border-3 border-white transition-all transform hover:scale-125 hover:bg-blue-400 hover:text-white"
          >
            <FaTwitter />
            <span className="absolute inset-0 bg-blue-400 transition-all transform top-full hover:top-0"></span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="relative w-14 h-14 flex items-center justify-center bg-white text-3xl text-gray-700 rounded-full border-3 border-white transition-all transform hover:scale-125 hover:bg-pink-600 hover:text-white"
          >
            <FaInstagram />
            <span className="absolute inset-0 bg-pink-600 transition-all transform top-full hover:top-0"></span>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="relative w-14 h-14 flex items-center justify-center bg-white text-3xl text-gray-700 rounded-full border-3 border-white transition-all transform hover:scale-125 hover:bg-red-600 hover:text-white"
          >
            <FaYoutube />
            <span className="absolute inset-0 bg-red-600 transition-all transform top-full hover:top-0"></span>
          </a>
        </div>

        {/* Certifications Section */}
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Our Certifications</h2>
        <p className="mb-4">We are proud to hold the following certifications:</p>
        <img src="icons/certificate-icon.png" alt="Certificate" className="w-32 h-32 mt-4" />
      </div>

      {/* Middle Section: Quick Links */}
      <div className="md:w-1/4 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4 px-10 ">Quick Links</h2>
        <ul className="list-none pl-0">
          <li className="mb-2 px-10"><a href="/testimonials" className="hover:underline">Testimonials</a></li>
          <li className="mb-2 px-10"><a href="/gallery" className="hover:underline">Gallery</a></li>
          <li className="mb-2 px-10"><a href="/events" className="hover:underline">Events</a></li>
          <li className="mb-2 px-10"><a href="/about" className="hover:underline">About</a></li>
        </ul>
      </div>

      {/* Right Section: Help */}
      <div className="md:w-1/4 mb-4 md:mb-0 md:pr-1">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Help</h2>
        <ul className="list-none pl-0">
          <li className="mb-2"><a href="/faq" className="hover:underline">FAQ</a></li>
          <li className="mb-2"><a href="/report" className="hover:underline">Report</a></li>
        </ul>
      </div>

      {/* Right Section: Google Map - no margins for left */}
      <div className="md:w-1/4 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62875.07017122231!2d78.07314923637816!3d9.95957278029879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c70dd73b0845%3A0x8763d6f2c8222df!2sStrength%20Sculpture%20Kingdom!5e0!3m2!1sen!2sin!4v1736492486863!5m2!1sen!2sin"
          width="100%"
          height="200"
          className="rounded-lg"
          allowFullScreen=""
          loading="lazy"
          title="Gym Location"
        ></iframe>
      </div>

    </div>

    {/* Footer Bottom */}
    <div className="text-center mt-4 border-t border-gray-700 pt-4">
      <p className="text-sm">&copy; 2025 Gym Name. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
