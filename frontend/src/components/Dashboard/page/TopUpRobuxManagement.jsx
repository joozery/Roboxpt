import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaEdit, FaTrash, FaCoins, FaImage } from "react-icons/fa";
import EditTopUpRobuxModal from "./EditTopUpRobuxModal"; // ✅ Import Popup สำหรับแก้ไขข้อมูล

const API_URL = "https://serverpt-6497ec45bb3e.herokuapp.com/api/topuprobux"; 

const TopUpRobuxManagement = () => {
  const [packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState({ amount: "", price: "", image: null });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editPackage, setEditPackage] = useState(null); // ✅ State เก็บข้อมูลที่ต้องการแก้ไข
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // ✅ เปิด/ปิด Popup

  // ✅ ดึงข้อมูลจาก API
  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get(API_URL);
      setPackages(response.data);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  // ✅ ฟังก์ชันอัปโหลดรูปภาพ
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setImageFile(file);
  };

  // ✅ ฟังก์ชันเพิ่มแพ็คเกจใหม่
  const handleAddPackage = async () => {
    if (!newPackage.amount || !newPackage.price || !imageFile) {
      alert("Please fill all fields and upload an image!");
      return;
    }

    const formData = new FormData();
    formData.append("amount", newPackage.amount);
    formData.append("price", newPackage.price);
    formData.append("image", imageFile); // ✅ ส่งไฟล์ไป API

    setLoading(true);
    try {
      await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      fetchPackages();
      setNewPackage({ amount: "", price: "", image: null });
      setImageFile(null);
    } catch (error) {
      console.error("Error adding package:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ ฟังก์ชันเปิด Popup แก้ไข
  const handleEdit = (pkg) => {
    setEditPackage(pkg);
    setIsEditModalOpen(true);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">💰 Manage Top Up Robux</h1>

      {/* ✅ ฟอร์มเพิ่มแพ็คเกจ */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">➕ Add New Robux Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="number"
            placeholder="Robux Amount"
            value={newPackage.amount}
            onChange={(e) => setNewPackage({ ...newPackage, amount: e.target.value })}
            className="p-2 border rounded-md w-full"
          />
          <input
            type="number"
            placeholder="Price (฿)"
            value={newPackage.price}
            onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
            className="p-2 border rounded-md w-full"
          />

          {/* ✅ อัปโหลดรูปภาพ */}
          <label className="flex items-center gap-2 cursor-pointer bg-gray-100 p-2 rounded-md border w-full text-gray-700">
            <FaImage className="text-gray-500" />
            <span>{imageFile ? "Image Selected ✅" : "Upload Image"}</span>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>

          <button
            onClick={handleAddPackage}
            className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Adding..." : <><FaPlus /> Add</>}
          </button>
        </div>
      </div>

      {/* ✅ ตารางแสดงรายการแพ็คเกจ */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">📦 Robux Packages</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3">Image</th>
              <th className="p-3">Robux Amount</th>
              <th className="p-3">Price (฿)</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <img src={pkg.image_url} alt={`Robux ${pkg.amount}`} className="w-14 h-14 object-contain mx-auto" />
                </td>
                <td className="p-3 text-center text-lg font-bold">{pkg.amount}</td>
                <td className="p-3 text-center text-blue-600 text-lg font-bold">฿{pkg.price}</td>
                <td className="p-3 flex justify-center gap-3">
                  <button
                    className="bg-yellow-500 text-white px-3 py-2 rounded-md hover:bg-yellow-600"
                    onClick={() => handleEdit(pkg)} // ✅ เปิด Modal แก้ไข
                  >
                    <FaEdit />
                  </button>
                  <button className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Popup สำหรับแก้ไขข้อมูล */}
      {isEditModalOpen && (
        <EditTopUpRobuxModal
          pkg={editPackage}
          onClose={() => setIsEditModalOpen(false)}
          onUpdated={fetchPackages} // ✅ รีเฟรชข้อมูลหลังแก้ไข
        />
      )}
    </div>
  );
};

export default TopUpRobuxManagement;