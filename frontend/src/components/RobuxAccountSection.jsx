// src/components/RobuxAccountSection.jsx
import React from "react";

const rates = [
  { label: "ALL ACCOUNTS", count: 41 },
  { label: "RATE 88", count: 3 },
  { label: "RATE 89", count: 3 },
  { label: "RATE 90", count: 3 },
  { label: "RATE 91", count: 3 },
  { label: "RATE 93", count: 3 },
  { label: "RATE 94", count: 3 },
  { label: "RATE 97", count: 3 },
  { label: "RATE 99", count: 3 },
  { label: "RATE 108", count: 1 },
  { label: "RATE 111", count: 1 },
  { label: "RATE 125", count: 2 },
  { label: "RATE 128", count: 8 },
  { label: "RATE 130", count: 5 },
];

const accounts = [
  { id: 548, robux: 100000, rate: "90 | 3.47 $", price: "9,000,000 VND | 346.55 USD", guarantee: 3 },
  { id: 549, robux: 100000, rate: "90 | 3.47 $", price: "9,000,000 VND | 346.55 USD", guarantee: 3 },
  { id: 550, robux: 100000, rate: "90 | 3.47 $", price: "9,000,000 VND | 346.55 USD", guarantee: 3 },
  { id: 545, robux: 45000, rate: "93 | 3.58 $", price: "4,185,000 VND | 161.15 USD", guarantee: 3 },
  { id: 546, robux: 45000, rate: "93 | 3.58 $", price: "4,185,000 VND | 161.15 USD", guarantee: 3 },
  { id: 547, robux: 45000, rate: "93 | 3.58 $", price: "4,185,000 VND | 161.15 USD", guarantee: 3 },
  { id: 557, robux: 25000, rate: "89 | 3.43 $", price: "2,225,000 VND | 85.68 USD", guarantee: 3 },
  { id: 558, robux: 25000, rate: "89 | 3.43 $", price: "2,225,000 VND | 85.68 USD", guarantee: 3 },
  { id: 559, robux: 25000, rate: "89 | 3.43 $", price: "2,225,000 VND | 85.68 USD", guarantee: 3 },
  { id: 542, robux: 22500, rate: "94 | 3.62 $", price: "2,115,000 VND | 81.44 USD", guarantee: 3 },
];

export default function RobuxAccountSection() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {rates.map((rate, i) => (
          <button
            key={i}
            className={`relative px-4 py-1 rounded-full border text-sm transition ${
              i === 0
                ? "bg-black text-white"
                : "bg-white border-gray-300 hover:bg-gray-100"
            }`}
          >
            {rate.label}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              {rate.count}
            </span>
          </button>
        ))}
      </div>

      {/* Export Buttons */}
      <div className="flex justify-end gap-3 mb-4">
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm">📋 Copy All</button>
        <button className="bg-sky-500 text-white px-4 py-2 rounded-md text-sm">📋 Copy CSV</button>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-md text-sm">📥 Excel Export</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm">📤 Export PDF</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">ROBUX</th>
              <th className="px-4 py-3">RATE</th>
              <th className="px-4 py-3">PRICE</th>
              <th className="px-4 py-3">ACC TYPE</th>
              <th className="px-4 py-3">GUARANTEE</th>
              <th className="px-4 py-3">OPERATION</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc, i) => (
              <tr key={i} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2">{acc.id}</td>
                <td className="px-4 py-2">{acc.robux.toLocaleString()}</td>
                <td className="px-4 py-2 text-blue-600 underline cursor-pointer">{acc.rate}</td>
                <td className="px-4 py-2">{acc.price}</td>
                <td className="px-4 py-2 text-gray-500">-</td>
                <td className="px-4 py-2">{acc.guarantee}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">Buy</button>
                    <button className="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded text-sm">Detail</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex gap-2 justify-center mt-6">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
          >
            {n}
          </button>
        ))}
        <button className="px-3 py-1 bg-black text-white rounded text-sm">{">>"}</button>
        <button className="px-3 py-1 bg-black text-white rounded text-sm">Last</button>
      </div>
    </div>
  );
}