import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import img1 from '../../assets/Trainers.jpg';
import img2 from '../../assets/e2.jpg';
import img3 from '../../assets/t7.jpg';
import img4 from '../../assets/nutrition.jpg';
import img5 from '../../assets/cf.jpg';
import img6 from '../../assets/st.jpg';
import Footer from '../Footer/Footer';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems = [
    { id: 1, image: img6, title: 'Strength Training' },
    { id: 2, image: img1, title: 'Cardio Workouts' },
    { id: 3, image: img3, title: 'Group Classes' },
    { id: 4, image: img5, title: 'Crossfit' },
    { id: 5, image: img4, title: 'Nutrition Plans' },
    { id: 6, image: img2, title: 'Fitness Equipment' },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <div className="text-center py-12 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-12 mt-10">Our Gym Gallery</h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-6xl px-4">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openModal(index)}
          >
            {/* Image */}
            <Zoom>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none"
              />
            </Zoom>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold text-white uppercase tracking-widest">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal (Lightbox) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4">
          <div className="relative max-w-3xl mx-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-4xl text-white font-bold opacity-90 hover:opacity-100 z-10"
            >
              ×
            </button>

            {/* Image with Zoom and Navigation */}
            <div className="relative flex justify-center items-center">
              <Zoom>
                <img
                  src={galleryItems[currentImageIndex].image}
                  alt={galleryItems[currentImageIndex].title}
                  className="w-full h-auto object-cover rounded-lg focus:outline-none"
                />
              </Zoom>

              {/* Navigation Arrows */}
              <div
                className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white text-3xl opacity-80 hover:opacity-100 z-10"
                onClick={prevImage}
              >
                ←
              </div>
              <div
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white text-3xl opacity-80 hover:opacity-100 z-10"
                onClick={nextImage}
              >
                →
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Gallery;
