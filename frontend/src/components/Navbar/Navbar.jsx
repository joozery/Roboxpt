import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FaStore, FaHeadset, FaBook, FaChevronDown, FaDiscord, FaArrowRight } from "react-icons/fa"; 
import logo from "../../assets/logo.png";
import En from "../../assets/EN-full.png";
import GetStartedModal from "../GetStartedModal/GetStartedModal"; // Import Modal

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-900/70 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50 py-4 px-6 shadow-lg">
        {/* Left Section */}
        <div className="flex items-center justify-between container mx-auto">
          {/* Logo with Text */}
          <Link to="/" className="text-2xl font-bold flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-white text-xl font-semibold">PTStock</span>
          </Link>

          {/* Navigation Links - ใช้ flex-grow เพื่อให้เมนูชิดซ้าย */}
          <nav className="hidden md:flex space-x-6 text-sm flex-grow ml-10">
            <Link to="/store" className="hover:text-blue-500 flex items-center">
              <FaStore className="mr-2" /> Store
            </Link>
            <a href="#" className="hover:text-blue-500 flex items-center">
              <FaHeadset className="mr-2" /> Support
            </a>
            <a href="#" className="hover:text-blue-500 flex items-center">
              <FaBook className="mr-2" /> Tutorial
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Discord Icon */}
            <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
              <FaDiscord className="w-6 h-6 text-white" />
            </button>

            {/* Language Selection */}
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 space-x-2 cursor-pointer">
              <img src={En} alt="Language" className="w-6 h-6 rounded-full" />
              <FaChevronDown className="text-xs text-white" />
            </div>

            {/* Currency Selection */}
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 space-x-2 cursor-pointer">
              <span className="text-sm">THB</span>
              <FaChevronDown className="text-xs text-white" />
            </div>

            {/* Get Started Button */}
            <button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-blue-600 hover:to-purple-700"
              onClick={() => setModalOpen(true)}
            >
              <span>Get Started!</span>
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;