import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Authentication from './components/Authentication/Authentication';
import Homepage from './components/Homepage/Homepage';
import Gallery from './components/Gallery/Gallery';
import About from './components/Aboutpage/Aboutpage';
import Testimonals from './components/Testimonals/Testimonals';
import CustomNavbar from './components/navbar/navbar';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Signin from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';

function App() {
  return (
    <div>
      <CustomNavbar /> {/* Include the Navbar for all pages */}
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        {/* Authentication Route */}
        <Route path="/authentication" element={<Authentication />}>
          <Route path="signin" element={<Signin />} />  {/* Signin page */}
          <Route path="signup" element={<Signup />} />  {/* Signup page */}
        </Route>
        
        {/* Other Routes */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonals />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
