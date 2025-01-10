import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Section: Contact Info */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">Contact Us</h2>
            <p className="mb-2">Phone: +1 234 567 890</p>
            <p className="mb-2">Email: contact@gymname.com</p>
            <p className="mb-4">Address: 123 Fitness Street, Healthy City, Fitland</p>
          </div>

          {/* Middle Section: Certifications */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">Certifications</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                <span>Certified Personal Trainers</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                <span>ISO 9001 Gym Certification</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                <span>Nutrition and Wellness Experts</span>
              </li>
            </ul>
          </div>

          {/* Right Section: Google Map */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345098505!2d144.96316!3d-37.816734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218cdee0!2sGym%20Location"
              width="100%"
              height="200"
              className="rounded-lg"
              allowFullScreen=""
              loading="lazy"
              title="Gym Location"
            ></iframe>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Follow Us</h2>
          <ul className="flex justify-center items-center">
            {/* Facebook */}
            <li className="list-none mx-2">
              <a
                href="#"
                className="w-20 h-20 bg-white text-center leading-[5rem] text-4xl rounded-full relative overflow-hidden border-4 border-white transition-transform transform hover:rotate-180"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-gray-800 transition-transform duration-500" />
              </a>
            </li>
            {/* Twitter */}
            <li className="list-none mx-2">
              <a
                href="#"
                className="w-20 h-20 bg-white text-center leading-[5rem] text-4xl rounded-full relative overflow-hidden border-4 border-white transition-transform transform hover:rotate-180"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-gray-800 transition-transform duration-500" />
              </a>
            </li>
            {/* LinkedIn */}
            <li className="list-none mx-2">
              <a
                href="#"
                className="w-20 h-20 bg-white text-center leading-[5rem] text-4xl rounded-full relative overflow-hidden border-4 border-white transition-transform transform hover:rotate-180"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-800 transition-transform duration-500" />
              </a>
            </li>
            {/* Google Plus */}
            <li className="list-none mx-2">
              <a
                href="#"
                className="w-20 h-20 bg-white text-center leading-[5rem] text-4xl rounded-full relative overflow-hidden border-4 border-white transition-transform transform hover:rotate-180"
              >
                <FontAwesomeIcon icon={faGooglePlusG} className="text-gray-800 transition-transform duration-500" />
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2025 Gym Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
