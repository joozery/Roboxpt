import React from "react";
import { FaUser, FaCog, FaEye, FaWallet } from "react-icons/fa";

const usersData = [
  {
    id: 1,
    userId: "USR12345",
    orders: 30,
    totalCredits: 5000,
    remainingCredits: 1500,
  },
  {
    id: 2,
    userId: "USR67890",
    orders: 50,
    totalCredits: 8000,
    remainingCredits: 3000,
  },
  {
    id: 3,
    userId: "USR54321",
    orders: 10,
    totalCredits: 2000,
    remainingCredits: 1200,
  },
];

const getCreditStatus = (credits) => {
  if (credits >= 3000) return "bg-green-500 text-white";
  if (credits >= 1500) return "bg-yellow-500 text-white";
  return "bg-red-500 text-white";
};

const Personal = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-purple-700 flex items-center gap-3">
        <FaUser /> Personal Settings
      </h1>

      {/* 🔹 แสดงข้อมูลผู้ใช้งานแบบ Card UI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {usersData.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <FaUser className="text-purple-500 text-4xl" />
              <div>
                <h3 className="text-lg font-bold text-gray-800">{user.userId}</h3>
                <p className="text-gray-500">Orders: {user.orders}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <p className="text-gray-600 text-sm flex items-center gap-2">
                <FaWallet className="text-blue-500" /> Total Credits: <span className="font-bold text-gray-700">฿{user.totalCredits}</span>
              </p>
              <p className="text-gray-600 text-sm flex items-center gap-2">
                <FaWallet className="text-green-500" /> Remaining Credits:
                <span className={`px-3 py-1 text-sm rounded-full ${getCreditStatus(user.remainingCredits)}`}>
                  ฿{user.remainingCredits}
                </span>
              </p>
            </div>

            {/* 🔹 ปุ่มจัดการ */}
            <div className="mt-4 flex gap-3">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-700">
                <FaEye /> View Profile
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-400">
                <FaCog /> Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personal;