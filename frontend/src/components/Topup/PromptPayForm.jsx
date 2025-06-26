import React from "react";

const PromptPayForm = ({ amount, setAmount, totalWithTax, accepted, onAcceptChange, onSubmit }) => (
  <div className="font-['Prompt']">
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center">
        <img
          src="https://promptpay.io/qr-demo.png"
          alt="PromptPay QR"
          className="w-40 h-40 rounded"
        />
        <p className="text-xs text-gray-300 mt-2">Time left : 15 m 05 s</p>
        <p className="text-xs text-red-400">Please send before time out !</p>
      </div>
      <div className="flex-1 space-y-3">
        <label className="text-sm block">Amount to topup</label>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          className="w-full px-4 py-2 rounded bg-[#1e213b] text-white"
        />
        <div className="text-sm text-right text-gray-300">
          <p>USD ($) Price: <span className="text-red-400">33.67 THB</span></p>
          <p className="text-white">
            Total: <strong>{totalWithTax.toFixed(2)} THB</strong>{" "}
            <span className="text-xs text-gray-400">(Tax 7% included)</span>
          </p>
          <p>You will receive <strong>{amount.toLocaleString()} pts</strong></p>
        </div>
      </div>
    </div>
    <div className="text-xs text-gray-400 mt-3">
      <p className="mb-1 font-semibold text-white">Term of service (สรุปย่อ)</p>
      <p>การเติมเงินถือเป็นการยืนยันการสั่งซื้อและไม่สามารถขอคืนเงินได้ในทุกกรณี กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนทำรายการ หากระบบไม่อัปเดตใน 5-15 นาที กรุณาติดต่อทีมงาน</p>
    </div>
    <div className="mt-2">
      <label className="inline-flex items-center">
        <input type="checkbox" className="mr-2" checked={accepted} onChange={onAcceptChange} />
        ยอมรับเงื่อนไขในการทำรายการ
      </label>
    </div>
    <div className="text-right">
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md" disabled={!accepted} onClick={onSubmit}>
        Cash out
      </button>
    </div>
  </div>
);

export default PromptPayForm; 