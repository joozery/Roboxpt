import React from "react";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const mockSupporters = Array(6).fill({
  name: "AungJo",
  username: "@aungjo",
  subs: "210K Subscribers",
  flag: "\ud83c\uddfb\ud83c\uddf3" // Vietnam flag
});

const SupportSliderSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#131427] to-[#0E1138] py-12 text-white font-['Prompt']">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">
          Our <span className="text-blue-400">Support</span>
        </h2>

        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide px-2">
          <button className="bg-[#1e1e2e] p-3 rounded-full hover:bg-[#2c2c3e]">
            <IoIosArrowBack className="text-white text-xl" />
          </button>

          {mockSupporters.map((s, index) => (
            <div
              key={index}
              className="bg-[#2a2a3c] min-w-[160px] p-4 rounded-xl flex flex-col items-center shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#4b4b6b] mb-2"></div>
              <div className="text-sm font-semibold flex items-center gap-1">
                {s.name} <FaYoutube className="text-red-500" /> <span>{s.flag}</span>
              </div>
              <div className="text-gray-400 text-xs">{s.username}</div>
              <div className="text-xs text-gray-300 mt-1">{s.subs}</div>
            </div>
          ))}

          <button className="bg-[#1e1e2e] p-3 rounded-full hover:bg-[#2c2c3e]">
            <IoIosArrowForward className="text-white text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportSliderSection;