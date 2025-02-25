import React, { useState } from "react";
import { FaShoppingCart, FaPlus } from "react-icons/fa";

// Mock Data: สินค้าทั้งหมด
const initialItems = [
  {
    id: 1,
    name: "Ghost",
    category: "Mystic Item",
    price: 350.99,
    oldPrice: 420.50,
    rarity: "Rare",
    image: "/assets/Ghost.webp",  // path ที่ถูกต้อง
  },
  {
    id: 2,
    name: "Shadow",
    category: "Legendary Weapon",
    price: 599.99,
    oldPrice: 720.00,
    rarity: "Mythical",
    image: "/assets/Shadow.webp", // path ที่ถูกต้อง
  },
  // สินค้าอื่นๆ...
];

const StockItems = () => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    price: "",
    oldPrice: "",
    rarity: "Common",
    image: "",
  });

  // Handle เพิ่มสินค้าใหม่
  const handleAddItem = () => {
    if (!newItem.name || !newItem.price) return alert("กรุณากรอกข้อมูลให้ครบ!");
    setItems([...items, { id: items.length + 1, ...newItem }]);
    setNewItem({ name: "", category: "", price: "", oldPrice: "", rarity: "Common", image: "" });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-purple-700">📦 Stock Items</h1>
      <p className="text-gray-600">Manage your stock inventory easily.</p>

      {/* Form เพิ่มสินค้า */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-lg font-bold text-gray-700">➕ Add New Item</h2>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Category"
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
            className="p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            className="p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Old Price"
            value={newItem.oldPrice}
            onChange={(e) => setNewItem({ ...newItem, oldPrice: e.target.value })}
            className="p-2 border rounded-md"
          />
          <select
            value={newItem.rarity}
            onChange={(e) => setNewItem({ ...newItem, rarity: e.target.value })}
            className="p-2 border rounded-md"
          >
            <option value="Common">Common</option>
            <option value="Rare">Rare</option>
            <option value="Legendary">Legendary</option>
            <option value="Mythical">Mythical</option>
          </select>
          <input
            type="text"
            placeholder="Image URL"
            value={newItem.image}
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
            className="p-2 border rounded-md"
          />
        </div>
        <button
          onClick={handleAddItem}
          className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <FaPlus /> Add Item
        </button>
      </div>

      {/* แสดงสินค้าเป็น Card UI */}
      <div className="grid grid-cols-5 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-gray-900 p-4 rounded-lg text-white shadow-md relative">
            {/* Badge Rarity */}
            <span
              className={`absolute top-2 left-2 px-3 py-1 rounded-full text-sm font-bold ${
                item.rarity === "Legendary"
                  ? "bg-purple-600"
                  : item.rarity === "Rare"
                  ? "bg-blue-500"
                  : item.rarity === "Mythical"
                  ? "bg-red-600"
                  : "bg-gray-500"
              }`}
            >
              {item.rarity}
            </span>

            {/* รูปภาพสินค้า */}
            <img src={item.image} alt={item.name} className="w-full h-32 object-contain" />

            {/* ข้อมูลสินค้า */}
            <p className="text-gray-400 text-sm mt-2">{item.category || "Other"}</p>
            <h3 className="text-lg font-bold">{item.name}</h3>

            {/* ราคา */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl font-bold">฿{item.price}</span>
              {item.oldPrice && <span className="text-red-400 line-through text-sm">฿{item.oldPrice}</span>}
            </div>

            {/* ปุ่ม Add to Cart */}
            <button className="absolute bottom-2 right-2 bg-purple-600 p-2 rounded-full text-white">
              <FaShoppingCart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockItems;
