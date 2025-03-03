import React, { useState } from "react";
import { FaSearch, FaDownload, FaFilter, FaMoneyBillWave, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const TransactionHistory = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // ✅ ข้อมูลตัวอย่างของธุรกรรม
  const transactions = [
    { id: 1, type: "Deposit", amount: 500, status: "Completed", date: "2025-03-01" },
    { id: 2, type: "Withdraw", amount: 200, status: "Pending", date: "2025-03-02" },
    { id: 3, type: "Transfer", amount: 1000, status: "Failed", date: "2025-03-03" },
    { id: 4, type: "Deposit", amount: 300, status: "Completed", date: "2025-03-04" },
  ];

  // ✅ ฟังก์ชันกรองข้อมูล
  const filteredTransactions = transactions.filter((tx) => {
    return (
      (filter === "all" || tx.status.toLowerCase() === filter) &&
      tx.type.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-purple-700">🔄 Transaction History</h1>
      <p className="text-gray-600">ดูประวัติการทำธุรกรรมทั้งหมด</p>

      {/* 🔎 ค้นหาและกรอง */}
      <div className="flex gap-4 bg-white p-4 shadow-md rounded-lg">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="ค้นหาธุรกรรม..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border rounded-md text-gray-700"
          />
        </div>
        
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-md text-gray-700"
        >
          <option value="all">ทั้งหมด</option>
          <option value="completed">✅ สำเร็จ</option>
          <option value="pending">⏳ รอดำเนินการ</option>
          <option value="failed">❌ ล้มเหลว</option>
        </select>

        <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700">
          <FaDownload /> ดาวน์โหลดรายงาน
        </button>
      </div>

      {/* 📋 ตารางธุรกรรม */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2">ประเภท</th>
              <th className="py-2">จำนวนเงิน</th>
              <th className="py-2">สถานะ</th>
              <th className="py-2">วันที่</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((tx) => (
              <tr key={tx.id} className="border-b">
                <td className="py-3">{tx.type}</td>
                <td className="py-3 text-blue-600 font-bold">฿{tx.amount}</td>
                <td className="py-3 flex items-center gap-2">
                  {tx.status === "Completed" && <FaCheckCircle className="text-green-500" />}
                  {tx.status === "Pending" && <FaClock className="text-yellow-500" />}
                  {tx.status === "Failed" && <FaTimesCircle className="text-red-500" />}
                  {tx.status}
                </td>
                <td className="py-3">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;