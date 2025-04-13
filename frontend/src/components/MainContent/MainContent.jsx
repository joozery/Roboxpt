import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart, FaFire, FaFilter } from "react-icons/fa";
import { ThreeDots } from "@agney/react-loading"; // ✅ loading effect

const API_ITEMS = "https://serverpt-6497ec45bb3e.herokuapp.com/api/items";

const rarityColors = {
  Common: "bg-gray-500",
  Uncommon: "bg-green-500",
  Rare: "bg-purple-500",
  Legendary: "bg-pink-500",
  Mythical: "bg-red-500",
};

const categories = [
  { name: "Best Sellers", icon: <FaFire className="text-blue-500" /> },
  { name: "Permanent Fruits" },
  { name: "Gamepasses" },
  { name: "Physical Fruits" },
  { name: "Others" },
  { name: "Accounts" },
];

const MainContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("Best Sellers");
  const [sortOption, setSortOption] = useState("Popularity");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_ITEMS);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 font-['Prompt']">
      <div className="flex justify-between items-center mb-4">
        {/* Tabs */}
        <div className="flex space-x-6 text-white text-sm">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition ${
                selectedCategory === cat.name
                  ? "text-blue-400 border-b-2 border-blue-500"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.icon && <span>{cat.icon}</span>}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Sort */}
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

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <ThreeDots width="40" color="#60a5fa" />
        </div>
      ) : (
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

              {/* Image */}
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />

              {/* Title & Category */}
              <h3 className="text-white font-semibold mt-3">{product.name}</h3>
              <p className="text-gray-400 text-sm">{product.category_name}</p>

              {/* Price & Cart */}
              <div className="flex justify-between items-center mt-2">
                <div>
                  <span className="text-white font-bold text-lg">฿{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-gray-500 text-sm line-through ml-2">
                      ฿{product.oldPrice}
                    </span>
                  )}
                </div>
                <button
                  className={`p-2 rounded-md transition ${
                    rarityColors[product.rarity] || "bg-gray-600"
                  } hover:opacity-80`}
                >
                  <FaShoppingCart className="text-white text-lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainContent;