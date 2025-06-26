import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer/Footer";
import MastercardForm from '../components/Topup/MastercardForm';
import TrueMoneyForm from '../components/Topup/TrueMoneyForm';
import PromptPayForm from '../components/Topup/PromptPayForm';
import BinanceForm from '../components/Topup/BinanceForm';
import { useNavigate } from "react-router-dom";

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
  const [accepted, setAccepted] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [showSlipModal, setShowSlipModal] = useState(false);
  const [slipFile, setSlipFile] = useState(null);
  const [slipSuccess, setSlipSuccess] = useState(false);
  const navigate = useNavigate();

  const handleAcceptChange = (e) => setAccepted(e.target.checked);

  const handleTopup = () => {
    setLoading(true);
    setError(null);
    setSlipFile(null);
    setSlipSuccess(false);
    setShowSlipModal(false);
    setTimeout(() => {
      setLoading(false);
      if (selectedMethod === "PromptPay" || selectedMethod === "Binance") {
        setShowSlipModal(true);
      } else {
        setSuccess(true);
      }
    }, 1800);
  };

  const handleSlipUpload = (e) => {
    const file = e.target.files[0];
    setSlipFile(file);
  };

  const handleSubmitSlip = (e) => {
    e.preventDefault();
    if (!slipFile) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSlipSuccess(true);
    }, 1500);
  };

  const handleCloseModal = () => {
    setSuccess(false);
    setError(null);
    setShowSlipModal(false);
    setSlipFile(null);
    setSlipSuccess(false);
    navigate('/');
  };

  return (
    <>
      <motion.div
        className="min-h-screen bg-[#0f1125] pt-24 pb-24 text-white font-['Prompt']"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold">Topup Point</h1>
          <p className="text-sm text-gray-400">
            Topup via Bank Transfer, Credit Card, Promptpay, Binance, etc.
          </p>
          <div className="w-28 h-1 bg-blue-400 mt-2 mx-auto rounded-full" />
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          className="flex justify-center gap-4 flex-wrap mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {paymentMethods.map((method, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              {method.icon ? (
                <motion.img
                  src={method.icon}
                  alt={method.name}
                  onClick={() => setSelectedMethod(method.name)}
                  className={`w-20 h-auto cursor-pointer transition-transform ${
                    selectedMethod === method.name
                      ? "ring-2 ring-blue-400 rounded"
                      : ""
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                />
              ) : (
                <motion.div
                  className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {method.label}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Payment Form */}
        <div className="max-w-xl mx-auto bg-[#191b31] p-6 rounded-lg shadow-lg space-y-5 min-h-[420px] font-['Prompt']">
          <AnimatePresence mode="wait">
            {selectedMethod === "TrueMoney" && (
              <motion.div
                key="truemoney"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <TrueMoneyForm
                  amount={amount}
                  setAmount={setAmount}
                  totalWithTax={totalWithTax}
                  truemoneyLink={truemoneyLink}
                  setTruemoneyLink={setTruemoneyLink}
                  isLinkValid={isLinkValid}
                  setIsLinkValid={setIsLinkValid}
                  accepted={accepted}
                  onAcceptChange={handleAcceptChange}
                  onSubmit={handleTopup}
                />
              </motion.div>
            )}
            {selectedMethod === "PromptPay" && (
              <motion.div
                key="promptpay"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <PromptPayForm
                  amount={amount}
                  setAmount={setAmount}
                  totalWithTax={totalWithTax}
                  accepted={accepted}
                  onAcceptChange={handleAcceptChange}
                  onSubmit={handleTopup}
                />
              </motion.div>
            )}
            {selectedMethod === "Binance" && (
              <motion.div
                key="binance"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <BinanceForm
                  amount={amount}
                  setAmount={setAmount}
                  totalWithTax={totalWithTax}
                  accepted={accepted}
                  onAcceptChange={handleAcceptChange}
                  onSubmit={handleTopup}
                />
              </motion.div>
            )}
            {selectedMethod === "Mastercard" && (
              <motion.div
                key="mastercard"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <MastercardForm
                  amount={amount}
                  setAmount={setAmount}
                  totalWithTax={totalWithTax}
                  accepted={accepted}
                  onAcceptChange={handleAcceptChange}
                  onSubmit={handleTopup}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Modal แสดงสถานะ */}
      {(loading || success || error || showSlipModal) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-['Prompt']">
          <motion.div
            className="bg-[#191b31] text-white p-8 rounded-lg shadow-lg min-w-[320px] text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {loading && (
              <>
                <div className="mb-4 flex justify-center">
                  <svg className="animate-spin h-8 w-8 text-blue-400" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                </div>
                <div className="text-lg font-semibold mb-2">กำลังดำเนินการ...</div>
                <div className="text-gray-400 text-sm">กรุณารอสักครู่ ระบบกำลังประมวลผล</div>
              </>
            )}
            {success && (
              <>
                <div className="mb-4 flex justify-center">
                  <svg className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-lg font-semibold mb-2">เติมเงินสำเร็จ!</div>
                <div className="text-gray-400 text-sm mb-4">ขอบคุณที่ใช้บริการ</div>
                <button onClick={handleCloseModal} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md mt-2">ไปหน้าหลัก</button>
              </>
            )}
            {error && (
              <>
                <div className="mb-4 flex justify-center">
                  <svg className="h-10 w-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="text-lg font-semibold mb-2">เกิดข้อผิดพลาด</div>
                <div className="text-gray-400 text-sm mb-4">{error}</div>
                <button onClick={handleCloseModal} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md mt-2">ปิด</button>
              </>
            )}
            {showSlipModal && !slipSuccess && (
              <form onSubmit={handleSubmitSlip} className="space-y-4">
                <div className="mb-2 text-lg font-semibold">แนบสลิปการโอนเงิน</div>
                <div className="mb-2 text-gray-400 text-sm">กรุณาอัปโหลดสลิปเพื่อรอตรวจสอบ (jpg, png, pdf)</div>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleSlipUpload}
                  className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  required
                />
                {slipFile && (
                  <div className="text-green-400 text-sm">ไฟล์: {slipFile.name}</div>
                )}
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md mt-2 disabled:opacity-60"
                  disabled={!slipFile || loading}
                >
                  ส่งสลิป
                </button>
                <div>
                  <button type="button" onClick={handleCloseModal} className="text-gray-400 text-xs mt-2 underline">ยกเลิก</button>
                </div>
              </form>
            )}
            {showSlipModal && slipSuccess && (
              <>
                <div className="mb-4 flex justify-center">
                  <svg className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-lg font-semibold mb-2">ส่งสลิปสำเร็จ!</div>
                <div className="text-gray-400 text-sm mb-4">กรุณารอตรวจสอบยอดเงิน ทีมงานจะดำเนินการให้เร็วที่สุด</div>
                <button onClick={handleCloseModal} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md mt-2">ไปหน้าหลัก</button>
              </>
            )}
          </motion.div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default TopupPage;
