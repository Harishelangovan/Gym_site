import React from 'react';
import imgg from '../../assets/g1.jpg';

const Testimonals = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      text: 'This gym has been life-changing for me. I feel healthier, stronger, and more motivated every day.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/150',
      text: 'The trainers here are amazing! They really take the time to understand your fitness goals and help you reach them.',
    },
    {
      id: 3,
      name: 'Tom Johnson',
      image: 'https://via.placeholder.com/150',
      text: 'A great place to work out! I’ve seen incredible results and I highly recommend it to anyone looking to get fit.',
    },
    {
      id: 4,
      name: 'Tom Hiddelston',
      image: 'https://via.placeholder.com/150',
      text: 'A great place to work out! I’ve seen incredible results and I highly recommend it to anyone looking to get fit.',
    },
    {
      id: 5,
      name: 'Tom Holland',
      image: 'https://via.placeholder.com/150',
      text: 'A great place to work out! I’ve seen incredible results and I highly recommend it to anyone looking to get fit.',
    },
    {
      id: 6,
      name: 'Tom Hanks',
      image: 'https://via.placeholder.com/150',
      text: 'A great place to work out! I’ve seen incredible results and I highly recommend it to anyone looking to get fit.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          {/* Left Section with Image */}
          <div className="w-full md:w-1/2">
            <img
              src={imgg}
              alt="Gym"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section with Heading */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
              See What Other Clients Say About Us
            </h1>
            <p className="text-gray-700 text-lg text-center md:text-left">
              Don't just take our word for it. Hear from our amazing clients who have experienced transformative
              fitness journeys with us.
            </p>
          </div>
        </div>

        {/* Testimonial Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group flex flex-col justify-start items-start gap-2 w-full md:w-96 h-64 duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300"
            >
              {/* Card Image */}
              <div
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-24 h-24 rounded-full bg-gray-200"
                style={{
                  backgroundImage: `url(${testimonial.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>

              {/* Card Content */}
              <div className="pt-12">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{testimonial.name}</h2>
                <p className="text-gray-700 line-clamp-3">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
