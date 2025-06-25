import React, { useEffect, useState } from "react";
import axios from "axios";

const API_ADMINS = `${import.meta.env.VITE_API_URL}/api/admin/all`;
const API_ADD_ADMIN = `${import.meta.env.VITE_API_URL}/api/admin/register`;
const API_DELETE_ADMIN = `${import.meta.env.VITE_API_URL}/api/admin/delete`;


const roles = ["Admin", "Super Admin", "Editor"]; // 🔹 กำหนด Role ที่เลือกได้

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ name: "", email: "", password: "", role: "Admin" });

  const token = localStorage.getItem("adminToken"); // ✅ ดึง Token จาก localStorage

  // 📌 โหลดข้อมูล Admins
  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_ADMINS, {
        headers: { Authorization: `Bearer ${token}` }, // ✅ ส่ง Token ไปกับ Header
      });
      setAdmins(response.data.admins);
      setError("");
    } catch (error) {
      setError("Error fetching admins");
    } finally {
      setLoading(false);
    }
  };

  // 📌 เพิ่มแอดมินใหม่
  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_ADD_ADMIN, newAdmin, {
        headers: { Authorization: `Bearer ${token}` }, // ✅ ส่ง Token ไปกับ Header
      });
      fetchAdmins();
      setShowModal(false);
      setNewAdmin({ name: "", email: "", password: "", role: "Admin" });
    } catch (error) {
      setError("Error adding admin");
    }
  };

  // 📌 ลบแอดมิน
  const handleDeleteAdmin = async (id) => {
    if (!window.confirm("Are you sure you want to delete this admin?")) return;
    try {
      await axios.delete(`${API_DELETE_ADMIN}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }, // ✅ ส่ง Token ไปกับ Header
      });
      fetchAdmins();
    } catch (error) {
      setError("Error deleting admin");
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Manage Admins</h2>

      {loading && <p>Loading admins...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* 📌 ปุ่มเพิ่ม Admin */}
      <button onClick={() => setShowModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4">
        + Add Admin
      </button>

      {/* 📌 ตารางแสดงรายการ Admins */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Email</th>
              <th className="border p-3 text-left">Role</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.length > 0 ? (
              admins.map((admin) => (
                <tr key={admin.id} className="hover:bg-gray-50">
                  <td className="border p-3">{admin.id}</td>
                  <td className="border p-3">{admin.name}</td>
                  <td className="border p-3">{admin.email}</td>
                  <td className="border p-3">{admin.role}</td>
                  <td className="border p-3 text-center">
                    <button
                      onClick={() => handleDeleteAdmin(admin.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border p-3 text-center text-gray-500">
                  No admins found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 📌 Modal เพิ่มแอดมินใหม่ */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h3 className="text-lg font-semibold mb-4">Add New Admin</h3>
            <form onSubmit={handleAddAdmin} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-md"
                value={newAdmin.name}
                onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md"
                value={newAdmin.email}
                onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-md"
                value={newAdmin.password}
                onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
                required
              />
              <select
                className="w-full p-3 border rounded-md"
                value={newAdmin.role}
                onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <div className="flex justify-end space-x-2">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  Add Admin
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAdmins;