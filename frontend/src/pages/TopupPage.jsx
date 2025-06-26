import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";

import mastercard from '../assets/icons/mastercard.png';
import truemoney from "../assets/icons/truemoney.png";
import promptpay from "../assets/icons/promptpay.png";
import binance from "../assets/icons/binance.png";

const paymentMethods = [
  { name: "Mastercard", icon: mastercard },
  { name: "TrueMoney", icon: truemoney },
  { name: "PromptPay", icon: promptpay },
  { name: "Binance", icon: binance },
  { name: "ComingSoon", label: "Later Soon" },
];

const TopupPage = () => {
  const [amount, setAmount] = useState(10000);
  const [selectedMethod, setSelectedMethod] = useState("Mastercard");
  const taxRate = 0.07;
  const totalWithTax = amount + amount * taxRate;
  const [truemoneyLink, setTruemoneyLink] = useState("");
  const [isLinkValid, setIsLinkValid] = useState(null); // null | true | false

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
                  onClick={() => setSelectedMethod(method.name)}
                  className={`w-20 h-auto cursor-pointer hover:scale-105 transition-transform ${
                    selectedMethod === method.name
                      ? "ring-2 ring-blue-400 rounded"
                      : ""
                  }`}
                />
              ) : (
                <div className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md">
                  {method.label}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Payment Form */}
        <div className="max-w-xl mx-auto bg-[#191b31] p-6 rounded-lg shadow-lg space-y-5">
          {selectedMethod === "TrueMoney" ? (
            <>
              <div className="grid grid-cols-2 gap-6">
                {/* Left: Link Input + Check */}
                <div className="space-y-3">
                  <div>
                    <label className="text-sm block">Truewallet Link</label>
                    <input
                      type="text"
                      placeholder="https://truemoneygift..."
                      value={truemoneyLink}
                      onChange={(e) => setTruemoneyLink(e.target.value)}
                      className="w-full px-4 py-2 rounded bg-[#1e213b] text-white"
                    />
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md"
                    onClick={() => {
                      // แก้ให้เชื่อม API จริงในอนาคต
                      if (truemoneyLink.includes("truemoney")) {
                        setIsLinkValid(true);
                      } else {
                        setIsLinkValid(false);
                      }
                    }}
                  >
                    Check
                  </button>

                  {/* Status */}
                  {isLinkValid === true && (
                    <p className="text-green-400 text-sm">
                      Link is valid (10,000.00฿)
                    </p>
                  )}
                  {isLinkValid === false && (
                    <p className="text-red-400 text-sm">
                      Link is invalid, try another
                    </p>
                  )}

                  <p className="text-xs text-gray-400 mt-2">
                    ** Please enter same amount as system show
                  </p>
                </div>

                {/* Right: Amount Summary */}
                <div className="space-y-3 text-sm text-right text-gray-300">
                  <div>
                    <label className="block mb-1">
                      Enter the amount of points
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full px-4 py-2 rounded bg-[#1e213b] text-white text-right"
                    />
                  </div>
                  <p>
                    USD ($) Price:{" "}
                    <span className="text-red-400">33.67 THB</span>
                  </p>
                  <p className="text-white">
                    Total: <strong>{totalWithTax.toFixed(2)} THB</strong>{" "}
                    <span className="text-xs text-gray-400">
                      (Tax 7% included)
                    </span>
                  </p>
                  <p>
                    You will receive{" "}
                    <strong>{amount.toLocaleString()} pts</strong>
                  </p>
                </div>
              </div>

              {/* Terms & Confirm */}
              <div className="text-xs text-gray-400 mt-3">
                <p className="mb-1 font-semibold text-white">
                  Term of service (สรุปย่อ)
                </p>
                <p>
                  การเติมเงินถือเป็นการยืนยันการสั่งซื้อและไม่สามารถขอคืนเงินได้ในทุกกรณี
                  กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนทำรายการ หากระบบไม่อัปเดตใน
                  5-15 นาที กรุณาติดต่อทีมงาน
                </p>
              </div>

              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  ยอมรับเงื่อนไขในการทำรายการ
                </label>
              </div>

              <div className="text-right">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
                  Cash out
                </button>
              </div>
            </>
          ) : selectedMethod === "PromptPay" ? (
            <>
              {/* PromptPay QR Payment */}
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <img
                    src="https://promptpay.io/qr-demo.png"
                    alt="PromptPay QR"
                    className="w-40 h-40 rounded"
                  />
                  <p className="text-xs text-gray-300 mt-2">
                    Time left : 15 m 05 s
                  </p>
                  <p className="text-xs text-red-400">
                    Please send before time out !
                  </p>
                </div>

                <div className="flex-1 space-y-3">
                  <label className="text-sm block">Amount to topup</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full px-4 py-2 rounded bg-[#1e213b] text-white"
                  />
                  <div className="text-sm text-right text-gray-300">
                    <p>
                      USD ($) Price:{" "}
                      <span className="text-red-400">33.67 THB</span>
                    </p>
                    <p className="text-white">
                      Total: <strong>{totalWithTax.toFixed(2)} THB</strong>{" "}
                      <span className="text-xs text-gray-400">
                        (Tax 7% included)
                      </span>
                    </p>
                    <p>
                      You will receive{" "}
                      <strong>{amount.toLocaleString()} pts</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-400 mt-3">
                <p className="mb-1 font-semibold text-white">
                  Term of service (สรุปย่อ)
                </p>
                <p>
                  การเติมเงินถือเป็นการยืนยันการสั่งซื้อและไม่สามารถขอคืนเงินได้ในทุกกรณี
                  กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนทำรายการ หากระบบไม่อัปเดตใน
                  5-15 นาที กรุณาติดต่อทีมงาน
                </p>
              </div>

              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  ยอมรับเงื่อนไขในการทำรายการ
                </label>
              </div>

              <div className="text-right">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
                  Cash out
                </button>
              </div>
            </>
          ) : selectedMethod === "Binance" ? (
            <>
              {/* Binance Payment */}
              <div>
                <label className="text-sm block mb-1">TxID Link</label>
                <input
                  type="text"
                  value="https://bscscan.com/ex43x"
                  readOnly
                  className="w-full px-4 py-2 rounded bg-[#1e213b] text-white"
                />
              </div>
              <div>
                <label className="text-sm block mb-1">Amount to topup</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded bg-[#1e213b] text-white"
                />
              </div>
              <div className="text-right text-sm text-gray-300">
                <p>
                  USD ($) Price: <span className="text-red-400">23.67 THB</span>{" "}
                  <span className="text-xs text-gray-400">
                    (Price depend on Binance)
                  </span>
                </p>
                <p className="mt-1 text-white">
                  <strong>Total:</strong> {totalWithTax.toFixed(2)} THB{" "}
                  <span className="text-xs text-gray-400">
                    (Tax 7% included)
                  </span>
                </p>
                <p>
                  You will receive{" "}
                  <strong>{amount.toLocaleString()} pts</strong>
                </p>
              </div>

              <div className="text-xs text-gray-400 mt-3">
                <p className="mb-1 font-semibold text-white">
                  Term of service (สรุปย่อ)
                </p>
                <p>
                  การเติมเงินถือเป็นการยืนยันการสั่งซื้อและไม่สามารถขอคืนเงินได้ในทุกกรณี
                  กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนทำรายการ
                  หากระบบไม่อัปเดตในเวลา 5-15 นาที กรุณาติดต่อทีมงาน
                </p>
              </div>

              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  ยอมรับเงื่อนไขในการทำรายการ
                </label>
              </div>

              <div className="text-right">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
                  Cash out
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Mastercard / Default */}
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

              <div>
                <label className="text-sm">Amount to topup</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full mt-1 px-4 py-2 rounded bg-[#1e213b] text-white"
                />
              </div>

              <div className="text-right text-sm text-gray-300">
                <p className="mt-1 text-white">
                  Total: <strong>{totalWithTax.toLocaleString()} THB</strong>{" "}
                  <span className="text-xs text-gray-400">
                    (Tax 7% included)
                  </span>
                </p>
                <p>
                  You will receive{" "}
                  <strong>{amount.toLocaleString()} pts</strong>
                </p>
              </div>

              <div className="text-xs text-gray-400 mt-2">
                <input type="checkbox" className="mr-2" defaultChecked />
                ยอมรับเงื่อนไขในการทำรายการนี้
              </div>

              <div className="text-right">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition">
                  Cash out
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default TopupPage;
