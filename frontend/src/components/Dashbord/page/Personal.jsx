import React from "react";

// ตัวอย่างข้อมูลผู้ใช้งาน
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

const Personal = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-purple-700">Personal Settings</h1>

      {/* ตารางแสดงข้อมูลผู้ใช้งาน */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
          <thead className="bg-purple-100 text-purple-700">
            <tr>
              <th className="p-4 text-left">User ID</th>
              <th className="p-4 text-left">Orders Made</th>
              <th className="p-4 text-left">Total Credits</th>
              <th className="p-4 text-left">Remaining Credits</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{user.userId}</td>
                <td className="p-4">{user.orders}</td>
                <td className="p-4">฿{user.totalCredits}</td>
                <td className="p-4">฿{user.remainingCredits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Personal;
