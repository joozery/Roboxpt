import React from "react";

const BinanceForm = ({ amount, setAmount, totalWithTax, accepted, onAcceptChange, onSubmit }) => (
  <div className="font-['Prompt']">
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
        onChange={e => setAmount(Number(e.target.value))}
        className="w-full px-4 py-2 rounded bg-[#1e213b] text-white"
      />
    </div>
    <div className="text-right text-sm text-gray-300">
      <p>
        USD ($) Price: <span className="text-red-400">23.67 THB</span>{" "}
        <span className="text-xs text-gray-400">(Price depend on Binance)</span>
      </p>
      <p className="mt-1 text-white">
        <strong>Total:</strong> {totalWithTax.toFixed(2)} THB{" "}
        <span className="text-xs text-gray-400">(Tax 7% included)</span>
      </p>
      <p>
        You will receive <strong>{amount.toLocaleString()} pts</strong>
      </p>
    </div>
    <div className="text-xs text-gray-400 mt-3">
      <p className="mb-1 font-semibold text-white">Term of service (สรุปย่อ)</p>
      <p>การเติมเงินถือเป็นการยืนยันการสั่งซื้อและไม่สามารถขอคืนเงินได้ในทุกกรณี กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนทำรายการ หากระบบไม่อัปเดตในเวลา 5-15 นาที กรุณาติดต่อทีมงาน</p>
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

export default BinanceForm; 