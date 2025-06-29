import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaStore,
  FaHeadset,
  FaBook,
  FaChevronDown,
  FaDiscord,
  FaArrowRight,
  FaMoneyBillWave,
  FaSignOutAlt,
  FaUserCircle,
  FaShoppingCart,
  FaCreditCard,
} from "react-icons/fa";
import { MdShield } from "react-icons/md";
import logo from "../../assets/logo3.png";
import GetStartedModal from "../GetStartedModal/GetStartedModal";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    setUser(null);
  };

  // ฟังก์ชัน login Discord
  const loginWithDiscord = () => {
    let baseURL;
    if (process.env.NODE_ENV === 'production') {
      baseURL = window.location.origin; // ใช้ domain จริงอัตโนมัติ
    } else {
      baseURL = 'http://localhost:6230';
    }
    window.open(
      `${baseURL}/api/auth/discord`,
      'Discord Login',
      'width=500,height=600,scrollbars=yes,resizable=yes'
    );
  };

  return (
    <>
      <div className="bg-[#191b31] text-white fixed top-0 left-0 w-full z-50 py-3 border-b border-white/30 shadow-sm font-['Prompt']">
        <div className="max-w-screen-xl mx-auto flex items-center px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-12 h-12" />
          </Link>

          {/* Center Menu */}
          <div className="flex-1 flex justify-center">
            <div className="flex gap-8 text-base items-center">
              <Link to="/robux" className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaMoneyBillWave /> Robux
              </Link>
              <Link to="/store" className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaStore /> Store
              </Link>
              <Link to="/support" className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaHeadset /> Support
              </Link>
              <Link to="/tutorial" className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaBook /> Tutorial
              </Link>
              <Link to="/topup" className="flex items-center gap-1 hover:text-blue-400 transition">
                <FaCreditCard /> Top Up
              </Link>
            </div>
          </div>

          {/* Right Side: Icons + User Info */}
          <div className="flex items-center gap-4 text-base">
            {/* เปลี่ยน FaDiscord ให้เป็นปุ่ม */}
            <button
              onClick={loginWithDiscord}
              className="text-xl hover:text-blue-400 cursor-pointer transition-colors"
              title="Login with Discord"
            >
              <FaDiscord />
            </button>
            <MdShield className="text-xl hover:text-blue-400 cursor-pointer" />
            <FaShoppingCart className="text-xl hover:text-blue-400 cursor-pointer" />

            {user ? (
              <div className="flex items-center gap-2 ml-2">
                <FaUserCircle className="text-white text-2xl" />
                <div className="leading-tight text-left">
                  <div className="font-semibold">Username</div>
                  <div className="text-xs text-gray-300">
                    Balance <span className="text-blue-400 font-medium">9,999.00 pts</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-red-400 text-xs hover:underline mt-1"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setModalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-blue-600 hover:to-purple-700 text-xs"
              >
                <span>Get Started!</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Navbar; 