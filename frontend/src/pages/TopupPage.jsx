import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";

import mastercard from '../assets/icons/mastercard.png';
import truemoney from '../assets/icons/truemoney.png';
import promptpay from '../assets/icons/promptpay.png';
import binance from '../assets/icons/binance.png';

const paymentMethods = [
  { name: "Mastercard", icon: mastercard },
  { name: "TrueMoney", icon: truemoney },
  { name: "PromptPay", icon: promptpay },
  { name: "Binance", icon: binance },
  { name: "ComingSoon", label: "Later Soon" },
];

const TopupPage = () => {
  const [amount, setAmount] = useState(10000);
  const taxRate = 0.07;
  const totalWithTax = amount + amount * taxRate;
  const pointsReceived = amount;

  return (
    <>
      <motion.div
        className="min-h-screen bg-[#0f1125] pt-24 pb-24 text-white font-['Prompt']"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Topup Point</h1>
          <p className="text-sm text-gray-400">
            Topup via Bank Transfer, Credit Card, Promptpay, Binance, etc.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {paymentMethods.map((method, index) => (
            <div key={index}>
              {method.icon ? (
                <img
                  src={method.icon}
                  alt={method.name}
                  className="w-20 h-auto hover:scale-105 transition-transform"
                />
              ) : (
                <div className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md">
                  {method.label}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Credit Card Form */}
        <div className="max-w-xl mx-auto bg-[#191b31] p-6 rounded-lg shadow-lg space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Credit Number</label>
              <input
                type="text"
                value="5270 4298 1234 6859"
                className="w-full mt-1 px-4 py-2 rounded bg-[#1e213b] text-white"
                readOnly
              />
            </div>
            <div className="flex items-center justify-end">
              <img src={mastercard} alt="Card" className="w-10" />
            </div>

            <div>
              <label className="text-sm">Exp Date</label>
              <input
                type="text"
                value="16/30"
                className="w-full mt-1 px-4 py-2 rounded bg-[#1e213b] text-white"
                readOnly
              />
            </div>
            <div>
              <label className="text-sm">CVC</label>
              <input
                type="text"
                value="452"
                className="w-full mt-1 px-4 py-2 rounded bg-[#1e213b] text-white"
                readOnly
              />
            </div>
          </div>

          {/* Amount input */}
          <div>
            <label className="text-sm">Amount to topup</label>
            <input
              type="number"
              min={1}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full mt-1 px-4 py-2 rounded bg-[#1e213b] text-white"
            />
          </div>

          {/* Summary */}
          <div className="text-right text-sm text-gray-300">
            <p>
              USD ($) Price ≈ <span className="text-blue-400">287 THB</span>{" "}
              <span className="text-xs">(live)</span>
            </p>
            <p className="mt-1 text-white">
              Total: <strong>{totalWithTax.toLocaleString()} THB</strong>{" "}
              <span className="text-xs text-gray-400">(Tax 7% included)</span>
            </p>
            <p>
              You will receive <strong>{pointsReceived.toLocaleString()} pts</strong>
            </p>
          </div>

          {/* Terms */}
          <div className="text-xs text-gray-400 mt-2">
            <input type="checkbox" className="mr-2" defaultChecked />
            ยอมรับเงื่อนไขในการทำรายการนี้
          </div>

          {/* Submit */}
          <div className="text-right">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition">
              Cash out
            </button>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default TopupPage;
