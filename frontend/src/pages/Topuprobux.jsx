import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";

const API_URL = "https://serverpt-6497ec45bb3e.herokuapp.com/api/topuprobux"; // ✅ API URL

const TopupRobux = () => {
  const [robuxItems, setRobuxItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ ดึงข้อมูลจาก API
  useEffect(() => {
    fetchRobuxPackages();
  }, []);

  const fetchRobuxPackages = async () => {
    try {
      const response = await axios.get(API_URL);
      setRobuxItems(response.data); // ✅ อัปเดตข้อมูล
    } catch (error) {
      console.error("Error fetching Robux packages:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#011f4b] via-[#03396c] to-[#005b96] p-6 font-['Prompt']">
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-4">💎 Top Up Robux</h1>
        <p className="text-gray-200 mb-4 text-lg">Choose the Robux package you want</p>

        {/* ✅ แสดงข้อความโหลดข้อมูล */}
        {loading ? (
          <p className="text-white text-lg">Loading packages...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center">
            {robuxItems.length > 0 ? (
              robuxItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition transform hover:scale-105 min-h-[290px] w-56"
                >
                  <img 
                    src={item.image_url} 
                    alt={`Robux ${item.amount}`} 
                    className="w-32 h-32 object-contain mb-2"
                  />
                  
                  <h3 className="text-lg font-semibold text-gray-900">💰 {item.amount} ROBUX</h3>
                  <p className="text-blue-600 text-xl font-bold">฿{item.price}</p>
                  
                  <button className="mt-auto w-full bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition font-semibold shadow-md">
                    <FaShoppingCart /> Add to Cart
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
  );
};

export default TopupRobux;