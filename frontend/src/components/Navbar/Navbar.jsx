import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaStore, FaHeadset, FaBook, FaChevronDown, FaDiscord,
  FaArrowRight, FaMoneyBillWave, FaSignOutAlt
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import En from "../../assets/EN-full.png";
import GetStartedModal from "../GetStartedModal/GetStartedModal";
import { UserContext } from "../../context/UserContext"; // ✅ Import context

const Navbar = () => {
  const { user, setUser } = useContext(UserContext); // ✅ ดึงข้อมูลจาก context
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    setUser(null); // อัปเดต context ด้วย
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="bg-gray-900/70 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50 py-4 px-6 shadow-lg">
        <div className="flex items-center justify-between container mx-auto">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-white text-xl font-semibold">PTStock</span>
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex space-x-6 text-sm flex-grow ml-10">
            <Link to="/store" className="hover:text-blue-500 flex items-center">
              <FaStore className="mr-2" /> Store
            </Link>
            <Link to="/topuprobux" className="hover:text-green-400 flex items-center">
              <FaMoneyBillWave className="mr-2" /> Top Up Robux
            </Link>
            <a href="#" className="hover:text-blue-500 flex items-center">
              <FaHeadset className="mr-2" /> Support
            </a>
            <a href="#" className="hover:text-blue-500 flex items-center">
              <FaBook className="mr-2" /> Tutorial
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
              <FaDiscord className="w-6 h-6 text-white" />
            </button>

            {/* Language */}
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 space-x-2 cursor-pointer">
              <img src={En} alt="Lang" className="w-6 h-6 rounded-full" />
              <FaChevronDown className="text-xs text-white" />
            </div>

            {/* Currency */}
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 space-x-2 cursor-pointer">
              <span className="text-sm">THB</span>
              <FaChevronDown className="text-xs text-white" />
            </div>

            {/* 🔁 Show user info if logged in */}
            {user ? (
              <div className="relative">
                <button
                  className="flex items-center bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 space-x-2"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  <img src={user.picture || user.avatar} alt="avatar" className="w-6 h-6 rounded-full" />
                  <span>{user.name}</span>
                  <FaChevronDown className="text-xs" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-blue-600 hover:to-purple-700"
                onClick={() => setModalOpen(true)}
              >
                <span>Get Started!</span>
                <FaArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 🔹 Login/Register Modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;