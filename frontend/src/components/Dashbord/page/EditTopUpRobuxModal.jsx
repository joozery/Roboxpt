import React, { useState } from "react";
import axios from "axios";
import { FaImage } from "react-icons/fa";

const API_URL = "https://serverpt-6497ec45bb3e.herokuapp.com/api/topuprobux"; 

const EditTopUpRobuxModal = ({ pkg, onClose, onUpdated }) => {
  const [amount, setAmount] = useState(pkg.amount);
  const [price, setPrice] = useState(pkg.price);
  const [image, setImage] = useState(pkg.image_url); // ✅ ใช้รูปเดิมถ้าไม่มีการอัปโหลด
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ ฟังก์ชันอัปโหลดรูปใหม่
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file)); // ✅ แสดงตัวอย่างรูปใหม่
    }
  };

  // ✅ ฟังก์ชันบันทึกข้อมูล
  const handleUpdate = async () => {
    setLoading(true);
    try {
      let imageUrl = image; // ใช้รูปเดิมถ้าไม่มีการเปลี่ยน

      // ✅ ถ้ามีการอัปโหลดรูปใหม่ อัปโหลดไปยัง Cloudinary ก่อน
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "your_cloudinary_preset"); // แก้เป็นของคุณ
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/your_cloudinary_name/image/upload",
          formData
        );
        imageUrl = uploadRes.data.secure_url; // ✅ อัปเดต URL ใหม่
      }

      // ✅ ส่งข้อมูลอัปเดตไปยัง API
      await axios.put(`${API_URL}/${pkg.id}`, {
        amount,
        price,
        image_url: imageUrl, // ✅ อัปเดตรูปใหม่
      });

      onUpdated(); // ✅ รีเฟรชข้อมูล
      onClose(); // ✅ ปิด Popup
    } catch (error) {
      console.error("Error updating package:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Robux Package</h2>
        <div className="space-y-3">
          {/* ✅ รูปภาพปัจจุบัน */}
          <div className="flex justify-center">
            <img src={image} alt="Robux Package" className="w-32 h-32 object-contain border rounded-md shadow-md" />
          </div>

          {/* ✅ อัปโหลดรูปใหม่ */}
          <label className="flex items-center gap-2 cursor-pointer bg-gray-100 p-2 rounded-md border w-full text-gray-700">
            <FaImage className="text-gray-500" />
            <span>{imageFile ? "Image Selected ✅" : "Upload New Image"}</span>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 border rounded-md w-full"
            placeholder="Robux Amount"
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-2 border rounded-md w-full"
            placeholder="Price (฿)"
          />

          <div className="flex justify-between">
            <button
              onClick={handleUpdate}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTopUpRobuxModal;