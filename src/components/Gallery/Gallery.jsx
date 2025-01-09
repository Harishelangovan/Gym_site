import React from 'react';
import Navbar from '../navbar/navbar';
import img1 from '../../assets/Trainers.jpg';
import img2 from '../../assets/e2.jpg';
import img3 from '../../assets/t7.jpg';
import img4 from '../../assets/nutrition.jpg';
import img5 from '../../assets/cf.jpg';
import img6 from '../../assets/st.jpg';



const Gallery = () => {
  const galleryItems = [
    { id: 1, image: img6, title: 'Strength Training' },
    { id: 2, image: img1, title: 'Cardio Workouts' },
    { id: 3, image: img3, title: 'Group Classes' },
    { id: 4, image: img5, title: 'Crossfit' },
    { id: 5, image: img4, title: 'Nutrition Plans' },
    { id: 6, image: img2, title: 'Fitness Equipment' },
  ];

  return (
    <div className="text-center py-12 bg-gray-50 min-h-screen">


      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-12 mt-10">Our Gym Gallery</h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-6xl px-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg group transform transition duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold text-white uppercase tracking-widest">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
