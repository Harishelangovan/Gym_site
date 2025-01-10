// Signin.jsx
import React from "react";
import { Link } from "react-router-dom"; 

const Signin = () => {
  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out opacity-0 animate-fadeIn sm:max-w-sm md:max-w-md lg:max-w-lg w-full mx-auto">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
        Sign In
      </h2>
      <form>
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
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="text-yellow-500 bg-gray-800 border-gray-600 focus:ring-yellow-500"
            />
            <span className="ml-2 text-sm">Remember Me</span>
          </label>
          <a href="#" className="text-sm text-yellow-500 hover:underline">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
        >
          Sign In
        </button>
      </form>
      <div className="text-center mt-6 text-sm">
        <p>
          Don’t have an account ?{" "}
          <Link
            to="/authentication/Signup"
            className="text-yellow-500 hover:underline transition-all duration-300 transform hover:scale-110"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
