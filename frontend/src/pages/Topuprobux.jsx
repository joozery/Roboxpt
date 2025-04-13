import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import RobuxAccountSection from "../components/RobuxAccountSection";

const API_URL = "https://serverpt-6497ec45bb3e.herokuapp.com/api/topuprobux";

const TopupRobux = () => {
  const [robuxItems, setRobuxItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRobuxPackages();
  }, []);

  const fetchRobuxPackages = async () => {
    try {
      const response = await axios.get(API_URL);
      setRobuxItems(response.data);
    } catch (error) {
      console.error("Error fetching Robux packages:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-['Prompt'] bg-gradient-to-br from-[#011f4b] via-[#03396c] to-[#005b96] min-h-screen">
      {/* 🔹 ส่วนที่ 1: Grid Card Robux */}
      <section className="pt-28 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">💎 เติม Robux</h1>
          <p className="text-gray-200 mb-8 text-lg">เลือกแพ็กเกจ Robux ที่คุณต้องการ</p>

          {loading ? (
            <p className="text-white text-lg">Loading packages...</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
              {robuxItems.length > 0 ? (
                robuxItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white shadow-xl rounded-2xl p-5 flex flex-col items-center transition-transform transform hover:scale-105 min-h-[300px] w-full max-w-[220px] mx-auto"
                  >
                    <img
                      src={item.image_url}
                      alt={`Robux ${item.amount}`}
                      className="w-28 h-28 object-contain mb-3"
                    />
                    <h3 className="text-lg font-bold text-gray-800">💰 {item.amount} ROBUX</h3>
                    <p className="text-green-600 text-xl font-semibold mb-4">฿{item.price}</p>
                    <button className="mt-auto w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:from-green-600 hover:to-blue-600 transition font-semibold shadow-lg">
                      <FaShoppingCart /> เพิ่มลงตะกร้า
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-white text-lg">No packages available.</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 🔸 ส่วนที่ 2: Section ตารางบัญชี Robux */}
      <section className="py-12 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8 drop-shadow">📋 รายการบัญชี Robux พร้อมขาย</h2>
          <div className="bg-white rounded-xl shadow-xl p-6">
            <RobuxAccountSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopupRobux;