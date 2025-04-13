import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFilter, FaAngleRight, FaRedo, FaThLarge } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const API_URL = "https://serverpt-6497ec45bb3e.herokuapp.com/api/categories";

const SidebarStore = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [gamesOpen, setGamesOpen] = useState(true);
  const [filterOpen, setFilterOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 3680]);

  const rarities = [
    { name: "Common", count: 21, color: "bg-gray-500" },
    { name: "Uncommon", count: 10, color: "bg-green-400" },
    { name: "Rare", count: 10, color: "bg-purple-500" },
    { name: "Legendary", count: 20, color: "bg-pink-500" },
    { name: "Mythical", count: 31, color: "bg-red-500" },
  ];

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const res = await axios.get(API_URL);
      const data = res.data;
      if (data && Array.isArray(data)) {
        setGames(data);
        setSelectedGame(data[0]?.id);
      }
    } catch (err) {
      console.error("❌ Error loading categories:", err);
    }
  };

  return (
    <div className="bg-[#0f172a] text-white w-[300px] p-4 rounded-lg shadow-lg space-y-4 font-['Prompt']">
      {/* Section: Games Header */}
      <div
        className="flex items-center justify-between cursor-pointer text-lg font-semibold"
        onClick={() => setGamesOpen(!gamesOpen)}
      >
        <div className="flex items-center space-x-2">
          <FaThLarge className="text-blue-400" />
          <span>Games</span>
        </div>
        {gamesOpen ? <FiChevronUp /> : <FiChevronDown />}
      </div>

      {/* Section: Game List */}
      {gamesOpen && (
        <div className="space-y-2 transition-all duration-300">
          {games.map((game) => (
            <button
              key={game.id}
              className={`flex items-center justify-between w-full px-3 py-2 rounded-md ${
                selectedGame === game.id ? "bg-[#1e293b]" : "hover:bg-gray-800"
              }`}
              onClick={() => setSelectedGame(game.id)}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 overflow-hidden rounded-md bg-gray-700">
                  <img
                    src={game.image || "/default.png"}
                    alt={game.name}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = "/default.png")}
                  />
                </div>
                <span className="text-sm">{game.name}</span>
              </div>
              {selectedGame === game.id ? (
                <div className="w-5 h-5 bg-blue-500 rounded-full" />
              ) : (
                <FaAngleRight className="text-gray-400" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Section: Filter */}
      <div className="border-t border-gray-700 pt-4 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setFilterOpen(!filterOpen)}>
          <div className="flex items-center space-x-2 text-gray-300 font-semibold">
            <FaFilter className="text-blue-400" />
            <span>Filter Items</span>
          </div>
          <span className="text-blue-400 hover:underline text-sm cursor-pointer">Reset</span>
        </div>

        {/* Content */}
        {filterOpen && (
          <div className="space-y-4">
            {/* Price Range */}
            <div className="bg-[#1e293b] p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2 text-gray-300 font-medium">
                <span>Price Range</span>
                <FiChevronDown className="cursor-pointer" />
              </div>
              <input
                type="range"
                min="0"
                max="18399.8"
                step="1"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseFloat(e.target.value)])}
                className="w-full appearance-none h-1 bg-blue-500 rounded-full"
              />
              <div className="flex justify-between items-center mt-3">
                <div className="bg-gray-800 text-white text-sm rounded-md px-3 py-1">฿ {priceRange[0].toFixed(2)}</div>
                <span className="text-gray-400 text-sm">—</span>
                <div className="bg-gray-800 text-white text-sm rounded-md px-3 py-1">฿ {priceRange[1].toFixed(2)}</div>
              </div>
            </div>

            {/* Rarities */}
            <div className="bg-[#1e293b] p-4 rounded-xl space-y-2">
              <div className="text-gray-300 font-medium mb-1">Rarities</div>
              {rarities.map((r) => (
                <div key={r.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${r.color}`} />
                    <span>{r.name} - {r.count}</span>
                  </div>
                  <div className="w-5 h-5 bg-blue-500 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarStore;