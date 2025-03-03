import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome, FaUserFriends, FaRobot, FaComments, FaMicrophone, FaBlog, FaCreditCard,
  FaBullhorn, FaList, FaCog, FaImages, FaTicketAlt, FaTools, FaThLarge, FaMagic,
  FaSearch, FaChevronDown, FaExchangeAlt, FaQuestionCircle, FaUser, FaBoxes, FaMap,
  FaMoneyCheckAlt, FaChartLine, FaHistory, FaMoneyBillWave
} from "react-icons/fa";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-80 h-screen bg-white shadow-lg flex flex-col">
      {/* 🔹 ส่วน Header + ช่องค้นหา */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-purple-700">PTSTOCK</h2>
          <FaExchangeAlt className="text-gray-500 cursor-pointer" />
        </div>

        {/* 🔹 ช่องค้นหา */}
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md outline-none text-gray-700"
          />
        </div>
      </div>

      {/* 🔹 Scrollable Area รวมเมนู + Footer + User Profile */}
      <div className="flex-1 overflow-y-auto px-6 max-h-screen">
        {/* 🔹 เมนูหลัก */}
        <ul className="space-y-2">
          <NavLink to="/dashboard/overview" className="sidebar-item">
            <FaThLarge size={18} />
            <span>Overview</span>
          </NavLink>
          <NavLink to="/dashboard/personal" className="sidebar-item">
            <FaUserFriends size={18} />
            <span>Personal</span>
          </NavLink>
          <NavLink to="/dashboard/subscriptions" className="sidebar-item">
            <FaCreditCard size={18} />
            <span>Subscriptions</span>
          </NavLink>
          <NavLink to="/dashboard/tools" className="sidebar-item">
            <FaTools size={18} />
            <span>Tools</span>
          </NavLink>

          {/* 🔹 Stock Items */}
          <NavLink to="/dashboard/stock-items" className="sidebar-item">
            <FaBoxes size={18} />
            <span>Stock Items</span>
          </NavLink>

          {/* 🔹 Map Game Category */}
          <NavLink to="/dashboard/map-game-category" className="sidebar-item">
            <FaMap size={18} />
            <span>Map Game Category</span>
          </NavLink>

          {/* 🔹 🏦 เมนู Payment Management */}
          <li className="mt-4 text-gray-600 font-bold text-sm uppercase">Payments</li>
          <NavLink to="/dashboard/manage-payments" className="sidebar-item">
            <FaMoneyCheckAlt size={18} />
            <span>Manage Payments</span>
          </NavLink>
          <NavLink to="/dashboard/payment-reports" className="sidebar-item">
            <FaChartLine size={18} />
            <span>Payment Reports</span>
          </NavLink>
          <NavLink to="/dashboard/transaction-history" className="sidebar-item">
            <FaHistory size={18} />
            <span>Transaction History</span>
          </NavLink>

          {/* 🔹 🛒 Top Up Robux Management */}
          <li className="mt-4 text-gray-600 font-bold text-sm uppercase">Top Up Robux</li>
          <NavLink to="/dashboard/topup-robux-management" className="sidebar-item">
            <FaMoneyBillWave size={18} />
            <span>Manage Top Up Robux</span>
          </NavLink>
        </ul>

        {/* 🔹 Dropdown Menu */}
        <div className="mt-6">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full text-purple-700 font-medium py-3 px-4 rounded-md border border-purple-300 hover:bg-purple-100"
          >
            <span>+ Add quick link</span>
            <FaChevronDown className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {isDropdownOpen && (
            <ul className="mt-2 space-y-2 pl-4">
              <NavLink to="/dashboard/transfer-money" className="sidebar-item">
                <span>💰 Transfer Money</span>
              </NavLink>
              <NavLink to="/dashboard/investment-news" className="sidebar-item">
                <span>📈 Investment News</span>
              </NavLink>
              <NavLink to="/dashboard/vacation-goals" className="sidebar-item">
                <span>🏖 Vacation Goals</span>
              </NavLink>
            </ul>
          )}
        </div>

        {/* 🔹 Footer & User Profile */}
        <div className="mt-8 pb-6 border-t pt-6">
          <ul className="space-y-2">
            <NavLink to="/dashboard/settings" className="sidebar-item">
              <FaCog size={18} />
              <span>Settings</span>
            </NavLink>
            <NavLink to="/dashboard/help-center" className="sidebar-item">
              <FaQuestionCircle size={18} />
              <span>Help Center</span>
            </NavLink>
          </ul>

          {/* 🔹 User Profile */}
          <div className="flex items-center mt-8 p-4 rounded-lg bg-purple-100 hover:bg-purple-200 cursor-pointer shadow-md transition-all">
            <FaUser size={24} className="text-purple-600" />
            <div className="ml-3">
              <h3 className="text-sm font-bold text-purple-800">Jennifer Clomin</h3>
              <p className="text-xs text-purple-600">jennifer.clom@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;