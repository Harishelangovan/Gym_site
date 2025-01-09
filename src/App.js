import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Authentication from './components/Authentication/Authentication';
import Homepage from './components/Homepage/Homepage';
import Gallery from './components/Gallery/Gallery'; // Import the Gallery component
import Navbar from './components/navbar/navbar';
import About from './components/Aboutpage/Aboutpage';
import Testimonals from './components/Testimonals/Testimonals';
import CustomNavbar from './components/navbar/navbar';
import Events from'./components/Events/Events';
function App() {
  return (
    <div>
      <CustomNavbar/> {/* Include the Navbar for all pages */}
      <Routes>
        {/* Conditional rendering of Homepage or Authentication */}
        <Route path="/" element={true ? <Homepage /> : <Authentication />} />
        
        {/* Route for the Gallery page */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonals/>}/>
        <Route path="/events" element={<Events/>}/>
      </Routes>
    </div>
  );
}

export default App;
