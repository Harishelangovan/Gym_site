import React, { useState, useEffect } from 'react';
import video from '../../assets/myvideo.mp4'; // Import your video file
import image from '../../assets/strength.jpg';

const Homepage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textArray = [
    "Welcome to SSKingdom",
    "Your fitness journey begins here!",
    "Stay Strong, Stay Fit",
    "Join Our Fitness Community",
  ];

  // Slideshow text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, [textArray.length]);

  return (
    <div>
      {/* Video Background */}
      <div className="relative h-screen">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <video className="object-cover w-full h-full" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        {/* Slideshow Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            {textArray[currentTextIndex]}
          </h1>
        </div>

        {/* Button Below the Slideshow Text */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-10">
          <button
            className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer group"
          >
            Join Us!
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-center"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-red-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-center"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-red-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-center"
            ></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10 text-white">
              Explore now!
            </span>
          </button>
        </div>
      </div>

      {/* Image Card and Text Section */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Image Card on Left */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative group w-80 h-80 overflow-hidden rounded-lg shadow-lg">
              <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage:`url(${image})` }}></div>
            </div>
          </div>

          {/* Text Section on Right */}
          <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">SSKingdom Fitness</h2>
            <p className="text-lg text-gray-600">
              SSKingdom Fitness is not just a gym; it is a way of life. It is widely recognized as a premium destination that promotes a healthy lifestyle. Located in Madurai, it is one of the best fitness centers, offering top-notch training programs.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our personalized designs will assist you in having the best time of your life. We provide various services such as functional training, fitness boot camps, body transformation, weight loss, and weight gain.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              The goal of this venture was to provide the best fitness experience possible under the supervision of highly qualified and experienced professionals. SSKingdom is growing across the city, ensuring a luxurious fitness experience, making it the best weight loss gym in Madurai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
