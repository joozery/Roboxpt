import React from "react";
import logo from "../../assets/pixelpad.png";
import En from "../../assets/EN-full.png";
import Discord from "../../assets/Discord.jpg";

const Navbar = () => {
  return (
    <div className="bg-gray-900/70 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50 py-4 px-6 shadow-lg">
      {/* Left Section */}
      <div className="flex items-center justify-between container mx-auto">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center space-x-1">
            <img src={logo} alt="Logo" className="w-40 h-10" />
            
          </div>
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:text-blue-500 flex items-center">
              <i className="fas fa-lock mr-1"></i> Store
            </a>
            <a href="#" className="hover:text-blue-500 flex items-center">
              <i className="fas fa-headset mr-1"></i> Support
            </a>
            <a href="#" className="hover:text-blue-500 flex items-center">
              <i className="fas fa-book mr-1"></i> Tutorial
            </a>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Discord Icon */}
          <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
            <img src={Discord} alt="Discord" className="w-9 h-9 rounded-full" />
          </button>

          {/* Language Selection */}
          <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 space-x-2 cursor-pointer">
            <img
              src={En}
              alt="Language"
              className="w-6 h-6 rounded-full"
            />
            <i className="fas fa-chevron-down text-xs"></i>
          </div>

          {/* Currency Selection */}
          <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 space-x-2 cursor-pointer">
            <span className="text-sm">THB</span>
            <i className="fas fa-chevron-down text-xs"></i>
          </div>

          {/* Get Started Button */}
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-blue-600 hover:to-purple-700">
            <span>Get Started!</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16l4-4m0 0l-4-4m4 4H7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;