import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFilter, FaAngleRight, FaRedo, FaThLarge, FaIdBadge } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const API_URL = "https://serverpt-6497ec45bb3e.herokuapp.com/api/categories"; // ✅ API URL

const SidebarStore = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [filterOpen, setFilterOpen] = useState(true);
  const [raritiesOpen, setRaritiesOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 3680]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await axios.get(API_URL);
      setGames(response.data.categories || []);
      if (response.data.categories.length > 0) {
        setSelectedGame(response.data.categories[0].name);
      }
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  return (
    <div className="bg-[#0f172a] text-white w-[300px] p-4 rounded-lg shadow-lg space-y-4">
      {/* Header */}
      <div className="flex items-center space-x-2 text-lg font-semibold">
        <FaThLarge className="text-blue-400" />
        <span>Games</span>
      </div>

      {/* Game List */}
      <div className="space-y-2">
        {games.map((game) => (
          <button
            key={game.id}
            className={`flex items-center justify-between w-full px-3 py-2 rounded-md ${
              selectedGame === game.name ? "bg-[#1e293b]" : "hover:bg-gray-800"
            }`}
            onClick={() => setSelectedGame(game.name)}
          >
            <div className="flex items-center space-x-3">
              <img src={game.image} alt={game.name} className="w-8 h-8 rounded-md" />
              <span>{game.name}</span>
            </div>
            {selectedGame === game.name ? (
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
            ) : (
              <FaAngleRight className="text-gray-400" />
            )}
          </button>
        ))}
      </div>

      {/* Filter Section */}
      <div className="border-t border-gray-700 pt-3">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <div className="flex items-center space-x-2">
            <FaFilter className="text-blue-400" />
            <span>Filter Items</span>
          </div>
          {filterOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {filterOpen && (
          <div className="mt-3 space-y-4">
            {/* Price Range */}
            <div className="bg-[#1e293b] p-3 rounded-md">
              <div className="flex justify-between items-center">
                <span>Price Range</span>
                <FiChevronDown className="cursor-pointer" />
              </div>
              <input
                type="range"
                min="0"
                max="3680"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full mt-2"
              />
              <div className="flex justify-between text-sm mt-2">
                <span>฿ {priceRange[0]}</span>
                <span>฿ {priceRange[1]}</span>
              </div>
            </div>

            {/* Rarities */}
            <div className="bg-[#1e293b] p-3 rounded-md">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setRaritiesOpen(!raritiesOpen)}
              >
                <span>Rarities</span>
                {raritiesOpen ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {raritiesOpen && (
                <div className="mt-3 space-y-2">
                  {[
                    { name: "Common", count: 21, color: "gray-400" },
                    { name: "Uncommon", count: 9, color: "green-400" },
                    { name: "Rare", count: 12, color: "blue-400" },
                    { name: "Legendary", count: 18, color: "purple-400" },
                    { name: "Mythical", count: 31, color: "yellow-400" }
                  ].map((rarity) => (
                    <button
                      key={rarity.name}
                      className="flex justify-between w-full px-3 py-2 bg-gray-800 rounded-md hover:bg-gray-700"
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 bg-${rarity.color} rounded-full`}></div>
                        <span>
                          {rarity.name} - {rarity.count}
                        </span>
                      </div>
                      <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Reset Filter */}
      <button className="flex items-center justify-center text-blue-400 hover:text-blue-300 mt-2">
        <FaRedo className="mr-2" />
        Reset
      </button>
    </div>
  );
};

export default SidebarStore;