import React from "react";
import { Link } from "react-router-dom"; // Link to navigate to SignIn page

const Signup = () => {
  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out opacity-0 animate-fadeIn max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
        Sign Up
      </h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            placeholder="Create a password"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center mt-6 text-sm">
        <p>
          Already have an account?{" "}
          <Link
            to="/authentication/Signin"
            className="text-yellow-500 hover:underline transition-all duration-300 transform hover:scale-110"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
