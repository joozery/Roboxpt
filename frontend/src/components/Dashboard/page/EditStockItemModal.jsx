import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSave, FaTimes, FaImage } from "react-icons/fa";

const API_ITEMS = `${import.meta.env.VITE_API_URL}/api/items`;
const API_CATEGORIES = `${import.meta.env.VITE_API_URL}/api/categories`;


const EditStockItemModal = ({ item, onClose, onUpdated }) => {
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category_id);
  const [price, setPrice] = useState(item.price);
  const [oldPrice, setOldPrice] = useState(item.oldPrice || "");
  const [rarity, setRarity] = useState(item.rarity);
  const [imageFile, setImageFile] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

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
    if (file) {
      setImageFile(file);
    }
  };

  const handleUpdate = async () => {
    if (!name || !category || !price || !rarity) {
      alert("กรุณากรอกข้อมูลให้ครบ!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category_id", category);
    formData.append("price", price);
    formData.append("oldPrice", oldPrice || null);
    formData.append("rarity", rarity);
    if (imageFile) {
      formData.append("image", imageFile); // ✅ เพิ่มรูปใหม่ถ้ามีการอัปโหลด
    }

    try {
      await axios.put(`${API_ITEMS}/${item.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onUpdated(); // ✅ รีโหลดข้อมูล
      onClose(); // ✅ ปิด Modal
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">✏️ Edit Item</h2>

        <div className="space-y-3">
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="p-2 border rounded-md w-full" 
            placeholder="Item Name"
          />

          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            className="p-2 border rounded-md w-full"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>

          <select 
            value={rarity} 
            onChange={(e) => setRarity(e.target.value)} 
            className="p-2 border rounded-md w-full"
          >
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="Legendary">Legendary</option>
            <option value="Mythical">Mythical</option>
          </select>

          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            className="p-2 border rounded-md w-full" 
            placeholder="Price"
          />
          
          <input 
            type="number" 
            value={oldPrice} 
            onChange={(e) => setOldPrice(e.target.value)} 
            className="p-2 border rounded-md w-full" 
            placeholder="Old Price (optional)"
          />

          {/* ✅ อัปโหลดรูปภาพ */}
          <label className="flex items-center gap-2 cursor-pointer bg-gray-100 p-2 rounded-md border w-full text-gray-700">
            <FaImage className="text-gray-500" />
            <span>{imageFile ? "Image Selected ✅" : "Upload New Image"}</span>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>

          {/* ✅ ปุ่มบันทึกและปิด */}
          <div className="flex justify-between mt-3">
            <button 
              onClick={handleUpdate} 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
            >
              <FaSave /> Save
            </button>
            <button 
              onClick={onClose} 
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 flex items-center gap-2"
            >
              <FaTimes /> Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStockItemModal;