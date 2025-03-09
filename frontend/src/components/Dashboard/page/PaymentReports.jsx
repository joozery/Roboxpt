import React, { useState } from "react";
import { FaFilter, FaFileDownload, FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // ใช้สำหรับ Chart.js

const PaymentReports = () => {
  const [transactions] = useState([
    { id: 1, type: "Deposit", amount: 5000, method: "SCB Bank", date: "2025-03-01" },
    { id: 2, type: "Withdrawal", amount: -2500, method: "Binance Wallet", date: "2025-03-02" },
    { id: 3, type: "Deposit", amount: 1200, method: "PromptPay", date: "2025-03-03" },
    { id: 4, type: "Deposit", amount: 3000, method: "Krungthai Bank", date: "2025-03-04" },
    { id: 5, type: "Withdrawal", amount: -1800, method: "Binance Wallet", date: "2025-03-05" }
  ]);

  const totalDeposits = transactions
    .filter(txn => txn.amount > 0)
    .reduce((sum, txn) => sum + txn.amount, 0);

  const totalWithdrawals = transactions
    .filter(txn => txn.amount < 0)
    .reduce((sum, txn) => sum + txn.amount, 0);

  const balance = totalDeposits + totalWithdrawals;

  // 📊 กราฟแนวโน้ม
  const chartData = {
    labels: transactions.map(txn => txn.date),
    datasets: [
      {
        label: "Transaction Amount",
        data: transactions.map(txn => txn.amount),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3
      }
    ]
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-purple-700">📊 Payment Reports</h1>
      <p className="text-gray-600">ดูรายงานธุรกรรมการเงินทั้งหมด</p>

      {/* 🔹 สรุปยอดรวม */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-green-100 p-6 rounded-lg shadow-md text-green-700">
          <h2 className="text-lg font-semibold">💰 Total Deposits</h2>
          <p className="text-2xl font-bold">฿{totalDeposits.toLocaleString()}</p>
        </div>
        <div className="bg-red-100 p-6 rounded-lg shadow-md text-red-700">
          <h2 className="text-lg font-semibold">💸 Total Withdrawals</h2>
          <p className="text-2xl font-bold">฿{Math.abs(totalWithdrawals).toLocaleString()}</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-blue-700">
          <h2 className="text-lg font-semibold">🏦 Balance</h2>
          <p className="text-2xl font-bold">฿{balance.toLocaleString()}</p>
        </div>
      </div>

      {/* 🔹 กราฟแนวโน้มธุรกรรม */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">📈 Transaction Trends</h2>
        <Line data={chartData} />
      </div>

      {/* 🔹 ตัวกรอง */}
      <div className="flex gap-4 mt-4">
        <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
          <FaFilter /> Filter Transactions
        </button>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          <FaFileDownload /> Download Report
        </button>
      </div>

      {/* 🔹 ตารางธุรกรรม */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">💰 Transaction History</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 flex items-center gap-2 cursor-pointer">
                Type <FaSortAmountUp />
              </th>
              <th className="p-2">Amount</th>
              <th className="p-2">Method</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(txn => (
              <tr key={txn.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{txn.type}</td>
                <td className={`p-2 font-bold ${txn.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                  ฿{txn.amount.toLocaleString()}
                </td>
                <td className="p-2">{txn.method}</td>
                <td className="p-2 text-gray-500">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentReports;