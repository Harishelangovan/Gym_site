import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import { Navigate } from "react-router-dom";

const Authentication = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-8 transform transition-all duration-500 ease-in-out opacity-0 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Authentication
        </h2>
        <Routes>
          <Route path="Signin" element={<Signin />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="/" element={<Navigate to="Signin" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Authentication;
