import React, { useState } from "react";
import { FaQrcode, FaBitcoin, FaCheckCircle, FaTimesCircle, FaUpload } from "react-icons/fa";

const CheckSlips = () => {
  const [tab, setTab] = useState("promptpay");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
  };

  const handleCheck = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // mock: สุ่ม success/error
      setResult(Math.random() > 0.3 ? "success" : "fail");
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto p-6 font-['Prompt'] bg-white rounded-2xl shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-2">
        <span>🔍</span> Check Payment Slip
      </h1>
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition border ${tab === "promptpay" ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-blue-50"}`}
          onClick={() => { setTab("promptpay"); setFile(null); setResult(null); }}
        >
          <FaQrcode /> PromptPay (Slip2Go)
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition border ${tab === "binance" ? "bg-yellow-400 text-black border-yellow-400" : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-yellow-50"}`}
          onClick={() => { setTab("binance"); setFile(null); setResult(null); }}
        >
          <FaBitcoin /> Binance
        </button>
      </div>

      <div className="bg-gray-50 p-5 rounded-xl shadow-inner">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">อัปโหลดสลิป {tab === "promptpay" ? "PromptPay" : "Binance"}</label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {file && <div className="mt-2 text-green-600 text-xs">ไฟล์: {file.name}</div>}
        </div>
        <button
          className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition ${tab === "promptpay" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-yellow-400 text-black hover:bg-yellow-500"} disabled:opacity-60`}
          onClick={handleCheck}
          disabled={!file || loading}
        >
          <FaUpload /> {tab === "promptpay" ? "ตรวจสอบด้วย Slip2Go" : "ตรวจสอบสลิป Binance"}
        </button>

        {/* ผลลัพธ์ mock */}
        {loading && <div className="mt-4 text-center text-blue-500 animate-pulse">กำลังตรวจสอบ...</div>}
        {result === "success" && (
          <div className="mt-4 flex flex-col items-center text-green-600">
            <FaCheckCircle className="text-3xl mb-1" />
            <div className="font-bold">ตรวจสอบสลิปสำเร็จ</div>
            <div className="text-xs text-gray-500">(Mock: ข้อมูลถูกต้อง)</div>
          </div>
        )}
        {result === "fail" && (
          <div className="mt-4 flex flex-col items-center text-red-500">
            <FaTimesCircle className="text-3xl mb-1" />
            <div className="font-bold">สลิปไม่ถูกต้อง หรือไม่สามารถตรวจสอบได้</div>
            <div className="text-xs text-gray-500">(Mock: กรุณาตรวจสอบไฟล์อีกครั้ง)</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckSlips; 