import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome, FaUserFriends, FaCreditCard, FaTools, FaThLarge, FaMap,
  FaMoneyCheckAlt, FaChartLine, FaHistory, FaMoneyBillWave, FaUsersCog,
  FaCog, FaQuestionCircle, FaUser, FaExchangeAlt, FaSearch, FaIdBadge
} from "react-icons/fa";
import axios from "axios";

const API_ADMIN_INFO = "https://serverpt-6497ec45bb3e.herokuapp.com/api/admin/me"; // ✅ ใช้ API จริง

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminInfo = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) return;

      try {
        const response = await axios.get(API_ADMIN_INFO, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAdmin(response.data.admin);
      } catch (error) {
        console.error("Error fetching admin info:", error);
      }
    };

    fetchAdminInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/dashboard/login");
  };

  return (
    <div className="w-80 h-screen bg-white shadow-lg flex flex-col">
      {/* 🔹 Header + ช่องค้นหา */}
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

      {/* 🔹 Scrollable Menu */}
      <div className="flex-1 overflow-y-auto px-6 max-h-screen">
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
          <NavLink to="/dashboard/stock-items" className="sidebar-item">
            <FaMap size={18} />
            <span>Stock Items</span>
          </NavLink>
           {/* 🔹 ✅ เพิ่มเมนู "Map Game Category" */}
           <NavLink to="/dashboard/map-game-category" className="sidebar-item">
            <FaMap size={18} />
            <span>Map Game Category</span>
          </NavLink>

          {/* 🔹 ✅ เพิ่มเมนู "Manage Roblox ID Accounts" */}
          <NavLink to="/dashboard/manage-roblox-accounts" className="sidebar-item">
            <FaIdBadge size={18} className="text-blue-500" />
            <span>Manage Roblox ID Accounts</span>
          </NavLink>

          {/* 🔹 Payments */}
          <li className="mt-4 text-gray-600 font-bold text-sm uppercase">Payments</li>
          <NavLink to="/dashboard/manage-payments" className="sidebar-item">
            <FaMoneyCheckAlt size={18} />
            <span>Manage Payments</span>
          </NavLink>
          <NavLink to="/dashboard/check-slips" className="sidebar-item">
            <FaSearch size={18} />
            <span>Check Slips</span>
          </NavLink>
          <NavLink to="/dashboard/payment-reports" className="sidebar-item">
            <FaChartLine size={18} />
            <span>Payment Reports</span>
          </NavLink>
          <NavLink to="/dashboard/transaction-history" className="sidebar-item">
            <FaHistory size={18} />
            <span>Transaction History</span>
          </NavLink>

          {/* 🔹 Top Up Robux */}
          <li className="mt-4 text-gray-600 font-bold text-sm uppercase">Top Up Robux</li>
          <NavLink to="/dashboard/topup-robux-management" className="sidebar-item">
            <FaMoneyBillWave size={18} />
            <span>Manage Top Up Robux</span>
          </NavLink>

          {/* 🔹 Admin Management */}
          <li className="mt-4 text-gray-600 font-bold text-sm uppercase">Admin Management</li>
          <NavLink to="/dashboard/manage-admins" className="sidebar-item">
            <FaUsersCog size={18} />
            <span>Manage Admins</span>
          </NavLink>
        </ul>

        {/* 🔹 Footer & User Profile */}
        <div className="mt-8 pb-6 border-t pt-6 relative">
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

          {/* 🔹 User Profile + Logout Popup */}
          {admin && (
            <div className="relative">
              <div
                className="flex items-center mt-8 p-4 rounded-lg bg-purple-100 hover:bg-purple-200 cursor-pointer shadow-md transition-all"
                onClick={() => setShowLogout(!showLogout)}
              >
                <FaUser size={24} className="text-purple-600" />
                <div className="ml-3">
                  <h3 className="text-sm font-bold text-purple-800">{admin.name}</h3>
                  <p className="text-xs text-purple-600">{admin.email}</p>
                </div>
              </div>

              {/* 🔹 Popup Logout */}
              {showLogout && (
                <div className="absolute bottom-16 left-0 w-full bg-white shadow-md rounded-md p-3">
                  <button
                    onClick={handleLogout}
                    className="w-full text-red-600 font-medium py-2 hover:bg-gray-100 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;