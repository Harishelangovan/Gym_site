import React from 'react';
// import teamImg1 from '../../assets/images/team1.jpg';
// import teamImg2 from '../../assets/images/team2.jpg';
// import teamImg3 from '../../assets/images/team3.jpg';

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

      {/* Team Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
            {/* <img src={teamImg1} alt="Team Member 1" className="w-full h-56 object-cover rounded-md mb-4" /> */}
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-500">Personal Trainer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
            {/* <img src={teamImg2} alt="Team Member 2" className="w-full h-56 object-cover rounded-md mb-4" /> */}
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-500">Yoga Instructor</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
            {/* <img src={teamImg3} alt="Team Member 3" className="w-full h-56 object-cover rounded-md mb-4" /> */}
            <h3 className="text-xl font-semibold mb-2">Mark Lee</h3>
            <p className="text-gray-500">Nutrition Expert</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12">
        <p className="text-gray-500 text-lg">© 2025 SSkingdom Gym. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default About;
