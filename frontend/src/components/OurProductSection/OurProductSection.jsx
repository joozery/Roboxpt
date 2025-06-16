// src/components/OurProductSection/OurProductSection.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const products = Array(6).fill({
  title: "Anime Adventure",
  price: "9.9k+",
  desc: "A famous TD game with anime characters",
});

const OurProductSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#131427] to-[#0E1138] py-20 text-white font-['Prompt']">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          Our <span className="text-[#59C9FF] underline">Product</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {products.map((_, index) => (
            <div
              key={index}
              className="bg-[#131427] rounded-xl px-6 py-5 shadow-lg flex items-center gap-5 hover:scale-[1.02] transition-all"
            >
              <div className="w-16 h-16 bg-[#353C8B] rounded-xl" />
              <div className="flex-1 text-left">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                  <FaStar className="text-gray-500" size={14} />
                </div>
                <div className="font-semibold mt-1">{_.title}</div>
                <div className="text-xl font-bold text-white">{_.price}</div>
                <p className="text-sm text-yellow-400 leading-snug">{_.desc}</p>
                <p className="text-xs text-gray-400 italic mt-1">Already sold</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProductSection;