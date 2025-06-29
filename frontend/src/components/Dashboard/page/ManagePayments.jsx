import React, { useState } from "react";
import { FaPlus, FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import mastercard from '../../../assets/icons/mastercard.png';
import truemoney from '../../../assets/icons/truemoney.png';
import promptpay from '../../../assets/icons/promptpay.png';
import binance from '../../../assets/icons/binance.png';

const ManagePayments = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, type: "Mastercard", name: "Mastercard", details: "**** **** **** 6859", icon: <img src={mastercard} className="w-7 h-7" alt="Mastercard" /> },
    { id: 2, type: "TrueMoney", name: "TrueMoney", details: "089-xxx-xxxx", icon: <img src={truemoney} className="w-7 h-7" alt="TrueMoney" /> },
    { id: 3, type: "PromptPay", name: "PromptPay", details: "089-123-4567", icon: <img src={promptpay} className="w-7 h-7" alt="PromptPay" /> },
    { id: 4, type: "Binance", name: "Binance Wallet", details: "0x4f...d8b3", icon: <img src={binance} className="w-7 h-7" alt="Binance" /> }
  ]);

  const [transactions] = useState([
    { id: 1, type: "Deposit", amount: "+5,000 THB", method: "Mastercard", date: "2025-03-01" },
    { id: 2, type: "Deposit", amount: "+2,500 THB", method: "TrueMoney", date: "2025-03-02" },
    { id: 3, type: "Deposit", amount: "+1,200 THB", method: "PromptPay", date: "2025-03-03" },
    { id: 4, type: "Deposit", amount: "+3,000 THB", method: "Binance Wallet", date: "2025-03-04" }
  ]);

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDetails, setEditDetails] = useState("");

  const handleRemoveAccount = (id) => {
    setAccounts(accounts.filter(account => account.id !== id));
  };

  const handleEdit = (account) => {
    setEditId(account.id);
    setEditName(account.name);
    setEditDetails(account.details);
  };

  const handleSave = (id) => {
    setAccounts(accounts.map(acc => acc.id === id ? { ...acc, name: editName, details: editDetails } : acc));
    setEditId(null);
    setEditName("");
    setEditDetails("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditName("");
    setEditDetails("");
  };

  return (
    <div className="p-4 md:p-8 space-y-10 font-['Prompt'] bg-gradient-to-b from-[#f6f7fb] to-[#e9eaf3] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1 flex items-center gap-2">💳 <span>Manage Payments</span></h1>
        <p className="text-gray-600 mb-6">จัดการช่องทางชำระเงินที่รองรับในระบบ</p>

        {/* Divider */}
        <div className="border-b border-blue-100 mb-8" />

        {/* Payment Methods Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">🔗 <span>Supported Payment Methods</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {accounts.map(account => (
              <div key={account.id} className="bg-white/90 rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-col items-center transition hover:shadow-xl">
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="mb-1">{account.icon}</div>
                  {editId === account.id ? (
                    <>
                      <input
                        className="font-semibold text-gray-800 bg-gray-50 border border-blue-200 rounded-lg px-2 py-1 mb-1 w-full text-center focus:ring-2 focus:ring-blue-300 outline-none"
                        value={editName}
                        onChange={e => setEditName(e.target.value)}
                      />
                      <input
                        className="text-gray-500 text-xs bg-gray-50 border border-blue-100 rounded-lg px-2 py-1 w-full text-center focus:ring-2 focus:ring-blue-200 outline-none"
                        value={editDetails}
                        onChange={e => setEditDetails(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <p className="font-semibold text-gray-800 text-lg text-center">{account.name}</p>
                      <p className="text-gray-500 text-xs text-center">{account.details}</p>
                    </>
                  )}
                </div>
                <div className="flex gap-2 items-center justify-center mt-2">
                  {editId === account.id ? (
                    <>
                      <button onClick={() => handleSave(account.id)} className="rounded-full p-2 bg-green-100 hover:bg-green-200 text-green-700 transition" title="Save"><FaSave /></button>
                      <button onClick={handleCancel} className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 transition" title="Cancel"><FaTimes /></button>
                    </>
                  ) : (
                    <button onClick={() => handleEdit(account)} className="rounded-full p-2 bg-blue-100 hover:bg-blue-200 text-blue-700 transition" title="Edit"><FaEdit /></button>
                  )}
                  <button 
                    onClick={() => handleRemoveAccount(account.id)}
                    className="rounded-full p-2 bg-red-100 hover:bg-red-200 text-red-600 transition"
                    title="Remove"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Payment Method Button */}
          <button className="mt-4 w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-xl shadow hover:from-blue-600 hover:to-blue-800 transition text-base font-semibold mx-auto">
            <FaPlus /> Add New Payment Method
          </button>
        </div>

        {/* Divider */}
        <div className="border-b border-blue-100 mb-6" />

        {/* Recent Transactions Section */}
        <div className="bg-white/90 p-4 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">💰 <span>Recent Transactions</span></h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-blue-50">
                  <th className="p-3">Type</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Method</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, idx) => (
                  <tr key={txn.id} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50 hover:bg-blue-100"}>
                    <td className="p-3">{txn.type}</td>
                    <td className={`p-3 font-bold ${txn.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}>{txn.amount}</td>
                    <td className="p-3">{txn.method}</td>
                    <td className="p-3 text-gray-500">{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePayments;