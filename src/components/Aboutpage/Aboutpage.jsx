import React from 'react';
// import teamImg1 from '../../assets/images/team1.jpg';
// import teamImg2 from '../../assets/images/team2.jpg';
// import teamImg3 from '../../assets/images/team3.jpg';
 import gymimg from '../../assets/e1.jpg';
 import coach from '../../assets/coach.jpg';
 import traine from '../../assets/trainer3.jpg';
 import traine2 from '../../assets/trainer2.jpg'
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 px-4 py-10">

      {/* Mission Statement Section */}
      <section className="text-center mb-5 mt-12">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">Our Mission</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          At SSkingdom Gym, we are committed to helping you reach your fitness goals.
          Our mission is to provide a supportive environment where everyone can feel empowered to stay fit, healthy, and confident.
        </p>
      </section>

{/* Core Values Section */}
<section className="bg-white py-12 px-6 rounded-lg shadow-lg mb-12">
  <h2 className="text-3xl font-semibold text-center mb-6">Our Core Values</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Dedication */}
    <div className="group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-3 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
        Dedication
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        At SSkingdom Gym, we are unwavering in our commitment to helping you
        achieve your fitness goals. Our professional trainers are here to guide
        and motivate you every step of the way.
      </p>
    </div>
    {/* Innovation */}
    <div className="group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-3 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
        Innovation
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        We embrace cutting-edge technology and the latest training methods to
        deliver enjoyable and result-driven fitness solutions.
      </p>
    </div>
    {/* Community */}
    <div className="group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-3 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
        Community
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        Be part of a supportive family that celebrates milestones, overcomes
        challenges, and builds lasting relationships.
      </p>
    </div>
    {/* Integrity */}
    <div className="group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-3 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
        Integrity
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        Honesty and transparency are at the heart of everything we do, building
        trust with our members every day.
      </p>
    </div>
    {/* Excellence */}
    <div className="group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-3 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
        Excellence
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        We deliver top-notch training programs, state-of-the-art facilities,
        and exceptional services to ensure your success.
      </p>
    </div>
    {/* Inclusivity */}
    <div className="group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-3 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
        Inclusivity
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        We welcome everyone, fostering an inclusive environment where people of
        all abilities and backgrounds feel at home.
      </p>
    </div>
    {/* Growth */}
    <div className="group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-3 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
        Growth
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        Personal growth is at the core of our mission. We help you grow
        stronger while improving our own services to match your evolving needs.
      </p>
    </div>
  </div>
</section>



      {/* Gym Image with Transition */}
      <section className="mb-12">
        <div className="relative overflow-hidden rounded-lg shadow-lg max-w-4xl mx-auto">
          <img
            src={gymimg}
            alt="Gym"
            className="object-cover w-full h-64 transition-transform duration-700 hover:scale-110"
          />
        </div>
        <p className="text-center mt-4 text-lg text-gray-600">
          Our state-of-the-art facilities and equipment are designed to help you achieve your fitness goals efficiently and safely.
        </p>
      </section>

      {/* Team Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <img
              src={coach}
              alt="Team Member 1"
              className="w-full h-56 object-cover rounded-md mb-4 transition-transform duration-500 hover:scale-110"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-500">Gym Coach</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <img
              src={ traine}
              alt="Team Member 2"
              className="w-full h-56 object-cover rounded-md mb-4 transition-transform duration-500 hover:scale-110"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-500">Yoga Instructor</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <img
              src={traine2}
              alt="Team Member 3"
              className="w-full h-56 object-cover rounded-md mb-4 transition-transform duration-500 hover:scale-110"
            />
            <h3 className="text-xl font-semibold mb-2">Mark Lee</h3>
            <p className="text-gray-500">Nutrition Expert</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <img
              src={traine2}
              alt="Team Member 3"
              className="w-full h-56 object-cover rounded-md mb-4 transition-transform duration-500 hover:scale-110"
            />
            <h3 className="text-xl font-semibold mb-2">Mark zuckberg</h3>
            <p className="text-gray-500"> Expert</p>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer/>

    </div>
  );
};

export default About;
