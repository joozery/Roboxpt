import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPercent, FaTrash, FaImage, FaPlus, FaEdit } from "react-icons/fa";

const API_ITEMS = "https://serverpt-6497ec45bb3e.herokuapp.com/api/items";
const API_CATEGORIES = "https://serverpt-6497ec45bb3e.herokuapp.com/api/categories";

const StockItems = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // ✅ ตัวแปรเก็บหมวดหมู่ที่เลือก
  const [newItem, setNewItem] = useState({ name: "", category: "", price: "", oldPrice: "", rarity: "Common", image: null });
  const [priceAdjustment, setPriceAdjustment] = useState(0);

  // ✅ ตัวแปรสำหรับ Popup แก้ไขสินค้า
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchItems();
    fetchCategories();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(API_ITEMS);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(API_CATEGORIES);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setNewItem({ ...newItem, image: file });
  };

  const handleAddItem = async () => {
    if (!newItem.name || !newItem.price || !newItem.category || !newItem.rarity || !newItem.image) {
      alert("กรุณากรอกข้อมูลให้ครบและอัปโหลดรูปภาพ!");
      return;
    }

    const formData = new FormData();
    formData.append("name", newItem.name);
    formData.append("category_id", newItem.category);
    formData.append("price", newItem.price);
    formData.append("oldPrice", newItem.oldPrice || null);
    formData.append("rarity", newItem.rarity);
    formData.append("image", newItem.image);

    try {
      const response = await axios.post(API_ITEMS, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setItems([...items, response.data]);
      setNewItem({ name: "", category: "", price: "", oldPrice: "", rarity: "Common", image: null });
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // ✅ ปรับราคาตามเปอร์เซ็นต์
  const handleAdjustPrices = async () => {
    if (!priceAdjustment) return;

    try {
      await axios.put(`${API_ITEMS}/adjust-prices`, { percentage: priceAdjustment });
      fetchItems(); // ✅ รีโหลดรายการสินค้า
    } catch (error) {
      console.error("Error adjusting prices:", error);
    }
  };

  // ✅ กรองสินค้าตามหมวดหมู่
  const filteredItems = selectedCategory
    ? items.filter(item => item.category_id === selectedCategory)
    : items;

    const handleDeleteItem = async (id) => {
      if (!window.confirm("คุณต้องการลบสินค้านี้ใช่หรือไม่?")) return;
  
      try {
        await axios.delete(`${API_ITEMS}/${id}`);
        setItems(items.filter((item) => item.id !== id)); // ลบออกจาก state
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    };

    // ✅ เปิด Popup และโหลดข้อมูลสินค้าที่ต้องการแก้ไข
  const openEditPopup = (item) => {
    setEditItem(item);
    setIsEditOpen(true);
  };

  // ✅ บันทึกข้อมูลที่แก้ไข
  const handleSaveEdit = async () => {
    if (!editItem.name || !editItem.price || !editItem.category_id) {
      alert("กรุณากรอกข้อมูลให้ครบ!");
      return;
    }

    try {
      await axios.put(`${API_ITEMS}/${editItem.id}`, editItem);
      fetchItems(); // โหลดข้อมูลใหม่
      setIsEditOpen(false); // ปิด Popup
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-purple-700">📦 Stock Items</h1>

      {/* ✅ แท็บหมวดหมู่ */}
      <div className="flex gap-4 overflow-x-auto">
        <button
          className={`px-4 py-2 rounded-md ${selectedCategory === null ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setSelectedCategory(null)}
        >
          All Categories
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded-md ${selectedCategory === cat.id ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* ✅ ปรับราคาทั้งหมด */}
      <div className="bg-white p-6 rounded-lg shadow-md flex gap-4">
        <input
          type="number"
          placeholder="Adjust Price (%)"
          value={priceAdjustment}
          onChange={(e) => setPriceAdjustment(e.target.value)}
          className="p-2 border rounded-md w-32"
        />
        <button
          onClick={handleAdjustPrices}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700"
        >
          <FaPercent /> Adjust Prices
        </button>
      </div>

      {/* ✅ Form เพิ่มสินค้า */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-lg font-bold text-gray-700">➕ Add New Item</h2>
        <div className="grid grid-cols-4 gap-4">
          <input type="text" placeholder="Item Name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} className="p-2 border rounded-md" />
          
          <select value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })} className="p-2 border rounded-md">
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
           {/* ✅ เพิ่มช่องเลือกความแรร์ */}
  <select value={newItem.rarity} onChange={(e) => setNewItem({ ...newItem, rarity: e.target.value })} className="p-2 border rounded-md">
    <option value="Common">Common</option>
    <option value="Uncommon">Uncommon</option>
    <option value="Rare">Rare</option>
    <option value="Legendary">Legendary</option>
    <option value="Mythical">Mythical</option>
  </select>

          <input type="number" placeholder="Price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} className="p-2 border rounded-md" />
          

          {/* ✅ เปลี่ยนจาก Image URL เป็น File Upload */}
          <label className="flex items-center gap-2 cursor-pointer bg-gray-100 p-2 rounded-md border">
            <FaImage className="text-gray-500" />
            <span className="text-gray-600">Upload Image</span>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>
        </div>
        <button onClick={handleAddItem} className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-700">
          <FaPlus /> Add Item
        </button>
      </div>

      {/* ✅ แสดงสินค้า */}
      <div className="grid grid-cols-5 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-gray-900 p-4 rounded-lg text-white shadow-md relative">
            <span className={`absolute top-2 left-2 px-3 py-1 rounded-full text-sm font-bold ${item.rarity === "Legendary" ? "bg-purple-600" : item.rarity === "Rare" ? "bg-blue-500" : item.rarity === "Mythical" ? "bg-red-600" : "bg-gray-500"}`}>
              {item.rarity}
            </span>

            <img src={item.image_url} alt={item.name} className="w-full h-32 object-contain" />

            <p className="text-gray-400 text-sm mt-2">{item.category_name || "Other"}</p>
            <h3 className="text-lg font-bold">{item.name}</h3>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl font-bold">฿{item.price}</span>
              {item.oldPrice && item.oldPrice !== "0.00" && (
                <span className="text-red-400 line-through text-sm">rb{item.oldPrice}</span>
              )}
            </div>

            {/* 🔹 ปุ่มแก้ไขสินค้า */}
            <button
              onClick={() => openEditPopup(item)}
              className="absolute bottom-2 left-2 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition"
            >
              <FaEdit />
            </button>

             {/* 🔹 ปุ่มลบสินค้า */}
             <button
              onClick={() => handleDeleteItem(item.id)}
              className="absolute bottom-2 right-2 bg-red-600 p-2 rounded-full text-white hover:bg-red-700 transition"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

       {/* ✅ Popup แก้ไขสินค้า */}
       {isEditOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-bold text-gray-700 mb-4">✏️ Edit Item</h2>

            {/* ฟอร์มแก้ไข */}
            <input
              type="text"
              value={editItem.name}
              onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
              placeholder="Item Name"
            />

            <select
              value={editItem.category_id}
              onChange={(e) => setEditItem({ ...editItem, category_id: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            <input
              type="number"
              value={editItem.price}
              onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
              placeholder="Price"
            />

            <select
              value={editItem.rarity}
              onChange={(e) => setEditItem({ ...editItem, rarity: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
            >
              <option value="Common">Common</option>
              <option value="Uncommon">Uncommon</option>
              <option value="Rare">Rare</option>
              <option value="Legendary">Legendary</option>
              <option value="Mythical">Mythical</option>
            </select>

            {/* 🔹 ปุ่มบันทึกและปิด */}
            <div className="flex justify-end gap-2">
              <button onClick={() => setIsEditOpen(false)} className="bg-gray-300 px-4 py-2 rounded-md">
                Cancel
              </button>
              <button onClick={handleSaveEdit} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockItems;