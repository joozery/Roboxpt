import React from "react";
import { FaChartLine, FaDollarSign, FaUsers, FaBox } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const Overview = () => {
  // 📌 ข้อมูลรายได้รวม (Total Revenue)
  const revenueData = [
    { month: "Jan", revenue: 5000 },
    { month: "Feb", revenue: 7000 },
    { month: "Mar", revenue: 8000 },
    { month: "Apr", revenue: 10000 },
    { month: "May", revenue: 12000 },
    { month: "Jun", revenue: 15000 },
  ];

  // 📌 ข้อมูลผู้ใช้งานรวม (Total Users)
  const userData = [
    { day: "Sun", users: 2000 },
    { day: "Mon", users: 3000 },
    { day: "Tue", users: 5000 },
    { day: "Wed", users: 8000 },
    { day: "Thu", users: 4000 },
    { day: "Fri", users: 2500 },
    { day: "Sat", users: 1500 },
  ];

  // 📌 ข้อมูล Robox ล่าสุด
  const latestItems = [
    { name: "Robox A", category: "Electronics", stock: 20, price: "$299" },
    { name: "Robox B", category: "Gaming", stock: 15, price: "$499" },
    { name: "Robox C", category: "Smart Home", stock: 10, price: "$199" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* 🔹 Summary Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaDollarSign className="text-green-500 text-3xl" />
          <div>
            <p className="text-gray-500">Total Revenue</p>
            <h2 className="text-xl font-bold">$150,000</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaChartLine className="text-blue-500 text-3xl" />
          <div>
            <p className="text-gray-500">Total Transactions</p>
            <h2 className="text-xl font-bold">12,500</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaUsers className="text-purple-500 text-3xl" />
          <div>
            <p className="text-gray-500">Total Users</p>
            <h2 className="text-xl font-bold">3,250</h2>
          </div>
        </div>
      </div>

      {/* 🔹 Charts Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* 🔹 Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-700 mb-4">📊 Revenue Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 🔹 User Growth Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-700 mb-4">📈 User Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#6B46C1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 🔹 Latest Robox Items */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-700 mb-4">🛒 Latest Robox Items</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3 text-left">Item</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {latestItems.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.stock}</td>
                <td className="p-3">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
