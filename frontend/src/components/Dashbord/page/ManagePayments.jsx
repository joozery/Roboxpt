import React, { useState } from "react";
import { FaPlus, FaTrash, FaBitcoin, FaUniversity, FaQrcode } from "react-icons/fa";

const ManagePayments = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, type: "Bank", name: "SCB Bank", details: "xxx-xxx-4567", icon: <FaUniversity className="text-blue-600" /> },
    { id: 2, type: "PromptPay", name: "PromptPay", details: "089-123-4567", icon: <FaQrcode className="text-green-600" /> },
    { id: 3, type: "Crypto", name: "Binance Wallet", details: "0x4f...d8b3", icon: <FaBitcoin className="text-yellow-500" /> }
  ]);

  const [transactions] = useState([
    { id: 1, type: "Deposit", amount: "+5,000 THB", method: "SCB Bank", date: "2025-03-01" },
    { id: 2, type: "Withdrawal", amount: "-2,500 THB", method: "Binance Wallet", date: "2025-03-02" },
    { id: 3, type: "Deposit", amount: "+1,200 THB", method: "PromptPay", date: "2025-03-03" }
  ]);

  const handleRemoveAccount = (id) => {
    setAccounts(accounts.filter(account => account.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-purple-700">🏦 Manage Payments</h1>
      <p className="text-gray-600">จัดการระบบชำระเงินของคุณที่นี่</p>

      {/* 🔹 บัญชีที่เชื่อมต่อ */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">🔗 Linked Accounts</h2>
        <div className="grid grid-cols-3 gap-4">
          {accounts.map(account => (
            <div key={account.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                {account.icon}
                <div>
                  <p className="font-semibold">{account.name}</p>
                  <p className="text-gray-500 text-sm">{account.details}</p>
                </div>
              </div>
              <button 
                onClick={() => handleRemoveAccount(account.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        {/* 🔹 ปุ่มเพิ่มบัญชีใหม่ */}
        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
          <FaPlus /> Add New Payment Method
        </button>
      </div>

      {/* 🔹 รายการธุรกรรมล่าสุด */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">💰 Recent Transactions</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Type</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Method</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(txn => (
              <tr key={txn.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{txn.type}</td>
                <td className={`p-2 font-bold ${txn.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                  {txn.amount}
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

export default ManagePayments;