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

  return (
    <>
      <div className="bg-[#191b31] text-white fixed top-0 left-0 w-full z-50 py-3 border-b border-blue-500 shadow-sm font-['Prompt']">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
          {/* ✅ Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </Link>

          {/* ✅ Center Menu */}
          <div className="hidden md:flex gap-6 text-sm">
            <Link
              to="/p2p"
              className="flex items-center gap-1 hover:text-blue-400"
            >
              <FaMoneyBillWave /> P2P
            </Link>
            <Link
              to="/store"
              className="flex items-center gap-1 hover:text-blue-400"
            >
              <FaStore /> Store
            </Link>
            <Link
              to="/support"
              className="flex items-center gap-1 hover:text-blue-400"
            >
              <FaHeadset /> Support
            </Link>
            <Link
              to="/tutorial"
              className="flex items-center gap-1 hover:text-blue-400"
            >
              <FaBook /> Tutorial
            </Link>
            <Link
              to="/topup"
              className="flex items-center gap-1 hover:text-blue-400"
            >
              <FaCreditCard /> Top Up
            </Link>
          </div>

          {/* ✅ Right Side: Icons + User Info */}
          <div className="flex items-center gap-4 text-sm">
            <FaDiscord className="text-lg hover:text-blue-400 cursor-pointer" />
            <MdShield className="text-lg hover:text-blue-400 cursor-pointer" />
            <FaShoppingCart className="text-lg hover:text-blue-400 cursor-pointer" />

            {user ? (
              <div className="flex items-start gap-2">
                <FaUserCircle className="text-white text-xl mt-1" />
                <div className="leading-tight text-left">
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-xs text-gray-300">
                    Balance{" "}
                    <span className="text-blue-400 font-medium">
                      {parseFloat(user.balance || 0).toLocaleString()} pts
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-red-400 text-xs hover:underline"
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
