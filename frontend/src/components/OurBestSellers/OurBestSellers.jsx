// src/components/OurBestSellers.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_ITEMS = "https://serverpt-6497ec45bb3e.herokuapp.com/api/items";

const rarityColors = {
  Common: "bg-gray-400 text-gray-900",
  Rare: "bg-blue-500 text-white",
  Epic: "bg-pink-500 text-white",
  Legendary: "bg-yellow-400 text-black",
  Mythical: "bg-red-500 text-white",
};

const OurBestSellers = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(API_ITEMS);
      setItems(response.data.slice(0, 10)); // limit to 10 items
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <section className="bg-[#0f172a] py-16 text-white font-['Prompt']">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Our <span className="text-[#59C9FF]">Best Sellers</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#131427] rounded-2xl px-4 py-6 text-left shadow-md hover:scale-[1.02] transition-all border border-[#202245]"
            >
              <div
                className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full font-semibold ${
                  rarityColors[item.rarity] || "bg-gray-600 text-white"
                }`}
              >
                {item.rarity}
              </div>

              <img
                src={item.image_url}
                alt={item.name}
                className="w-24 h-24 object-contain mx-auto mb-4"
              />

              <div className="text-center">
                <h3 className="text-white font-bold text-lg leading-tight">
                  {item.name}
                </h3>

                <div className="text-right mt-1">
                  <p className="text-red-400 text-sm line-through">
                    ฿{parseFloat(item.oldPrice || 0).toFixed(2)}
                  </p>
                  <p className="text-lg font-bold text-white">
                    ฿{parseFloat(item.price).toFixed(2)}
                  </p>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-1.5 mt-3 rounded-lg">
                  หยิบใส่ตะกร้า
                </button>

                <p className="text-xs text-gray-400 mt-2">ขายไปแล้ว 123 ชิ้น</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBestSellers;
