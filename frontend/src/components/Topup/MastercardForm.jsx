import React from "react";
import mastercard from '../../assets/icons/mastercard.png';

const MastercardForm = ({ amount, setAmount, totalWithTax, accepted, onAcceptChange, onSubmit }) => (
  <div className="font-['Prompt']">
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
        onChange={e => setAmount(Number(e.target.value))}
        className="w-full mt-1 px-4 py-2 rounded bg-[#1e213b] text-white"
      />
    </div>
    <div className="text-right text-sm text-gray-300">
      <p className="mt-1 text-white">
        Total: <strong>{totalWithTax.toLocaleString()} THB</strong>{" "}
        <span className="text-xs text-gray-400">(Tax 7% included)</span>
      </p>
      <p>
        You will receive <strong>{amount.toLocaleString()} pts</strong>
      </p>
    </div>
    <div className="text-xs text-gray-400 mt-2">
      <input type="checkbox" className="mr-2" checked={accepted} onChange={onAcceptChange} />
      ยอมรับเงื่อนไขในการทำรายการนี้
    </div>
    <div className="text-right">
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition" disabled={!accepted} onClick={onSubmit}>
        Cash out
      </button>
    </div>
  </div>
);

export default MastercardForm; 