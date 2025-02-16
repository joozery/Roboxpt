import React, { useState } from "react";
import { FaShoppingCart, FaFire, FaFilter } from "react-icons/fa";

const rarityColors = {
  Common: "bg-gray-500",
  Uncommon: "bg-green-500",
  Rare: "bg-purple-500",
  Legendary: "bg-pink-500",
  Mythical: "bg-red-500",
};

const categories = [
  { name: "Best Sellers", icon: <FaFire className="text-blue-500" />, active: true },
  { name: "Permanent Fruits", icon: null, active: false },
  { name: "Gamepasses", icon: null, active: false },
  { name: "Physical Fruits", icon: null, active: false },
  { name: "Others", icon: null, active: false },
  { name: "Accounts", icon: null, active: false },
];

const products = [
  { id: 1, name: "300k Money", price: 330.83, oldPrice: 404.43, rarity: "Rare", category: "Other", image: "money-300k.png" },
  { id: 2, name: "Pain", price: 476.55, oldPrice: 550.15, rarity: "Legendary", category: "Permanent Fruit", image: "pain.png" },
  { id: 3, name: "Barrier", price: 275.63, oldPrice: 386.03, rarity: "Rare", category: "Permanent Fruit", image: "barrier.png" },
  { id: 4, name: "500k Money", price: 478.03, oldPrice: 588.43, rarity: "Legendary", category: "Other", image: "money-500k.png" },
  { id: 5, name: "Winter Combo", price: 1434.8, oldPrice: 1655.6, rarity: "Mythical", category: "Gamepass", image: "winter-combo.png" },
  { id: 6, name: "5x Legendary Scrolls", price: 220.43, oldPrice: 275.63, rarity: "Common", category: "Gamepass", image: "legendary-scrolls.png" },
  { id: 7, name: "OP Kitsune", price: 367.63, oldPrice: 662.02, rarity: "Mythical", category: "Account", image: "kitsune.png" },
  { id: 8, name: "OP Leopard", price: 312.43, oldPrice: 512.92, rarity: "Legendary", category: "Account", image: "leopard.png" },
  { id: 1, name: "300k Money", price: 330.83, oldPrice: 404.43, rarity: "Rare", category: "Other", image: "money-300k.png" },
  { id: 2, name: "Pain", price: 476.55, oldPrice: 550.15, rarity: "Legendary", category: "Permanent Fruit", image: "pain.png" },
  { id: 3, name: "Barrier", price: 275.63, oldPrice: 386.03, rarity: "Rare", category: "Permanent Fruit", image: "barrier.png" },
  { id: 4, name: "500k Money", price: 478.03, oldPrice: 588.43, rarity: "Legendary", category: "Other", image: "money-500k.png" },
  { id: 5, name: "Winter Combo", price: 1434.8, oldPrice: 1655.6, rarity: "Mythical", category: "Gamepass", image: "winter-combo.png" },
  { id: 6, name: "5x Legendary Scrolls", price: 220.43, oldPrice: 275.63, rarity: "Common", category: "Gamepass", image: "legendary-scrolls.png" },
  { id: 7, name: "OP Kitsune", price: 367.63, oldPrice: 662.02, rarity: "Mythical", category: "Account", image: "kitsune.png" },
  { id: 8, name: "OP Leopard", price: 312.43, oldPrice: 512.92, rarity: "Legendary", category: "Account", image: "leopard.png" },
];

const MainContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("Best Sellers");
  const [sortOption, setSortOption] = useState("Popularity");

  return (
    <div className="p-6">
      {/* Category Tabs + Sort Options */}
      <div className="flex justify-between items-center mb-4">
        {/* Category Tabs */}
        <div className="flex space-x-6 text-white text-sm">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition ${
                selectedCategory === cat.name ? "text-blue-400 border-b-2 border-blue-500" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.icon && <span>{cat.icon}</span>}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg text-white space-x-2 cursor-pointer">
          <FaFilter className="text-gray-400" />
          <span>Sort By:</span>
          <select
            className="bg-transparent text-white focus:outline-none cursor-pointer"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Popularity">Popularity</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid - แสดง 7 ชิ้นต่อแถว */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#1e293b] p-4 rounded-lg shadow-lg relative transition transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Rarity Badge */}
            <span
              className={`absolute top-2 left-2 px-3 py-1 text-xs font-bold rounded-full ${rarityColors[product.rarity]}`}
            >
              {product.rarity}
            </span>

            {/* Product Image */}
            <img
              src={`/assets/${product.image}`}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />

            {/* Product Name & Category */}
            <h3 className="text-white font-semibold mt-3">{product.name}</h3>
            <p className="text-gray-400 text-sm">{product.category}</p>

            {/* Price & Cart Button */}
            <div className="flex justify-between items-center mt-2">
              <div>
                <span className="text-white font-bold text-lg">฿{product.price}</span>
                <span className="text-gray-500 text-sm line-through ml-2">฿{product.oldPrice}</span>
              </div>
              <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition">
                <FaShoppingCart className="text-white text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;