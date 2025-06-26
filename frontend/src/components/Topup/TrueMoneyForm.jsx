import React from "react";

const TrueMoneyForm = ({ amount, setAmount, totalWithTax, truemoneyLink, setTruemoneyLink, isLinkValid, setIsLinkValid, accepted, onAcceptChange, onSubmit }) => (
  <div className="font-['Prompt']">
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-3">
        <div>
          <label className="text-sm block">Truewallet Link</label>
          <input
            type="text"
            placeholder="https://truemoneygift..."
            value={truemoneyLink}
            onChange={e => setTruemoneyLink(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#1e213b] text-white"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md"
          onClick={() => {
            if (truemoneyLink.includes("truemoney")) {
              setIsLinkValid(true);
            } else {
              setIsLinkValid(false);
            }
          }}
        >
          Check
        </button>
        {isLinkValid === true && (
          <p className="text-green-400 text-sm">Link is valid (10,000.00฿)</p>
        )}
        {isLinkValid === false && (
          <p className="text-red-400 text-sm">Link is invalid, try another</p>
        )}
        <p className="text-xs text-gray-400 mt-2">** Please enter same amount as system show</p>
      </div>
      <div className="space-y-3 text-sm text-right text-gray-300">
        <div>
          <label className="block mb-1">Enter the amount of points</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            className="w-full px-4 py-2 rounded bg-[#1e213b] text-white text-right"
          />
        </div>
        <p>USD ($) Price: <span className="text-red-400">33.67 THB</span></p>
        <p className="text-white">
          Total: <strong>{totalWithTax.toFixed(2)} THB</strong>{" "}
          <span className="text-xs text-gray-400">(Tax 7% included)</span>
        </p>
        <p>You will receive <strong>{amount.toLocaleString()} pts</strong></p>
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

export default TrueMoneyForm; 