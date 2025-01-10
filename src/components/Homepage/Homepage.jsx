import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // For slideshows
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video from "../../assets/myvideo.mp4";
import video1 from "../../assets/gymvideo.mp4";
import image1 from "../../assets/s1.jpg";
import image2 from "../../assets/s2.jpg";
import image3 from "../../assets/strength.jpg";
import serviceImage1 from "../../assets/s4.jpg";
import serviceImage2 from "../../assets/s5.jpg";
import serviceImage3 from "../../assets/st.jpg";

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
    }, 3000);
    return () => clearInterval(interval);
  }, [textArray.length]);

  // Settings for React Slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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

        {/* Join Us Button */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-10">
        <Link to="authentication/Signup">
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
              Explore 
            </span>
          </button>
          </Link>
        </div>
      </div>

            {/* Image Card and Text Section */}
            <div className="bg-white py-16 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Image Card on Left */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative group w-80 h-80 overflow-hidden rounded-lg shadow-lg">
              <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage:`url(${image3})` }}></div>
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

      {/* Services Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Service Card with Slideshow */}
            <div className="w-full sm:w-1/2 md:w-1/4 p-6 bg-white rounded-lg shadow-lg">
              <Slider {...sliderSettings}>
                <img
                  src={serviceImage1}
                  alt="Service 1 Image 1"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src={serviceImage2}
                  alt="Service 1 Image 2"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src={serviceImage3}
                  alt="Service 1 Image 3"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </Slider>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Personal Training
              </h3>
              <p className="text-gray-600">
                Get tailored fitness plans from our expert trainers.
              </p>
            </div>
            {/* Add more service cards similarly */}
            <div className="w-full sm:w-1/2 md:w-1/4 p-6 bg-white rounded-lg shadow-lg">
              <Slider {...sliderSettings}>
                <img
                  src={serviceImage1}
                  alt="Service 1 Image 1"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src={serviceImage2}
                  alt="Service 1 Image 2"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src={serviceImage3}
                  alt="Service 1 Image 3"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </Slider>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Strength Training
              </h3>
              <p className="text-gray-600">
                Get tailored fitness plans from our expert trainers.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-6 bg-white rounded-lg shadow-lg">
              <Slider {...sliderSettings}>
                <img
                  src={serviceImage1}
                  alt="Service 1 Image 1"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src={serviceImage2}
                  alt="Service 1 Image 2"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src={serviceImage3}
                  alt="Service 1 Image 3"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </Slider>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Cardio Training
              </h3>
              <p className="text-gray-600">
                Get tailored fitness plans from our expert trainers.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-6 bg-white rounded-lg shadow-lg">
              <Slider {...sliderSettings}>
                <img
                  src={serviceImage1}
                  alt="Service 1 Image 1"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src={serviceImage2}
                  alt="Service 1 Image 2"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src={serviceImage3}
                  alt="Service 1 Image 3"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </Slider>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Fatloss Training
              </h3>
              <p className="text-gray-600">
                Get tailored fitness plans from our expert trainers.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-6 bg-white rounded-lg shadow-lg">
              <Slider {...sliderSettings}>
                <img
                  src={serviceImage1}
                  alt="Service 1 Image 1"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src={serviceImage2}
                  alt="Service 1 Image 2"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src={serviceImage3}
                  alt="Service 1 Image 3"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </Slider>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Athlete Training
              </h3>
              <p className="text-gray-600">
                Get tailored fitness plans from our expert trainers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Who We Are</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2">
              <Slider {...sliderSettings}>
                <img
                  src={image1}
                  alt="Who We Are Image 1"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <img
                  src={image2}
                  alt="Who We Are Image 2"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <video
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                  autoPlay
                  loop
                  muted
                >
                  <source src={video1} type="video/mp4" />
                </video>
              </Slider>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Welcome to SSKingdom
              </h3>
              <p className="text-lg text-gray-600">
                SSKingdom is a fitness facility that blends modern techniques
                with personalized care. Our goal is to empower your fitness
                journey and ensure lasting results.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our expert trainers and state-of-the-art equipment make us the
                go-to destination for fitness enthusiasts in Madurai.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-yellow-500 py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Start Your Fitness Journey?
        </h2>
        <button className="bg-black text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-gray-800 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Homepage;
