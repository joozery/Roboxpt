import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaTrash, FaEdit, FaGamepad, FaSearch, FaImage } from "react-icons/fa";

const API_URL = "https://serverpt-6497ec45bb3e.herokuapp.com/api/categories"; // ✅ URL API บน Heroku

const MapGameCategory = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: "", image: null });
  const [search, setSearch] = useState("");

  // 📌 ดึงข้อมูลหมวดหมู่จาก API เมื่อ Component โหลด
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("❌ Error fetching categories:", error));
  }, []);

  // 📌 ฟังก์ชันอัปโหลดไฟล์รูปภาพ
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewCategory({ ...newCategory, image: file });
    }
  };

  // 📌 ฟังก์ชันเพิ่มหมวดหมู่ใหม่
  const handleAddCategory = async () => {
    if (!newCategory.name.trim() || !newCategory.image) {
      alert("กรุณากรอกชื่อหมวดหมู่และอัปโหลดรูปภาพ!");
      return;
    }

    const formData = new FormData();
    formData.append("name", newCategory.name.trim());
    formData.append("image", newCategory.image);

    try {
      const response = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // ✅ อัปเดต state โดยตรง แทนการดึง API ใหม่
      setCategories((prev) => [...prev, response.data]);
      setNewCategory({ name: "", image: null });
    } catch (error) {
      console.error("❌ Error adding category:", error);
    }
  };

  // 📌 ฟังก์ชันลบหมวดหมู่
  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      
      // ✅ อัปเดต state โดยไม่ต้องโหลด API ใหม่
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
    } catch (error) {
      console.error("❌ Error deleting category:", error);
    }
  };

  // 📌 กรองหมวดหมู่ตามการค้นหา
  const filteredCategories = categories.filter((cat) =>
    cat.name.trim().toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* 🔹 หัวข้อหลัก */}
      <h1 className="text-2xl font-bold text-purple-700 flex items-center gap-2">
        <FaGamepad /> Map Game Category
      </h1>
      <p className="text-gray-600">Manage and categorize your game items.</p>

      {/* 🔹 ช่องค้นหา */}
      <div className="relative w-full max-w-md">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md outline-none text-gray-700 border"
        />
      </div>

      {/* 🔹 Form เพิ่มหมวดหมู่ */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-lg font-bold text-gray-700">➕ Add New Category</h2>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Category Name"
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
            className="p-2 border rounded-md flex-1"
          />
          <label className="flex items-center gap-2 cursor-pointer bg-gray-100 p-2 rounded-md border">
            <FaImage className="text-gray-500" />
            <span className="text-gray-600">Upload Image</span>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>
          <button
            onClick={handleAddCategory}
            className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-700 transition-all"
          >
            <FaPlus /> Add
          </button>
        </div>

        {/* 🔹 แสดงตัวอย่างรูปภาพที่อัปโหลด */}
        {newCategory.image && (
          <div className="mt-2">
            <img
              src={URL.createObjectURL(newCategory.image)}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-md border shadow-sm"
            />
          </div>
        )}
      </div>

      {/* 🔹 รายการหมวดหมู่ */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCategories.map((category) => (
          <div key={category.id} className="bg-gray-900 p-4 rounded-lg text-white shadow-md relative">
            {/* 🔹 รูปภาพหมวดหมู่ (ใช้ Cloudinary URL ที่เก็บในฐานข้อมูล) */}
            <img
              src={category.image} // ✅ ตอนนี้เป็น URL จาก Cloudinary
              alt={category.name.trim()}
              className="w-full h-32 object-cover rounded-lg"
            />

            {/* 🔹 ชื่อหมวดหมู่ */}
            <h3 className="text-lg font-bold text-center mt-2">{category.name.trim()}</h3>

            {/* 🔹 ปุ่มแก้ไข & ลบ */}
            <div className="flex justify-between mt-3">
              <button className="text-yellow-400 hover:text-yellow-300">
                <FaEdit size={18} />
              </button>
              <button
                onClick={() => handleDeleteCategory(category.id)}
                className="text-red-400 hover:text-red-300 transition-all"
              >
                <FaTrash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapGameCategory;