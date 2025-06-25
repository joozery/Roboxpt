import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiMail, FiLock } from "react-icons/fi";
import logo from "../../assets/logo.png"; // ✅ นำเข้าโลโก้เกม
import bgImage from "../../assets/pattern.webp"; // ✅ นำเข้าภาพพื้นหลังแนวเกมมิ่ง

const API_LOGIN = `${import.meta.env.VITE_API_URL}/api/admin/login`; // ✅ ใช้ API จริง

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(API_LOGIN, { email, password });

      if (response.data.success) {
        // ✅ เก็บ Token และข้อมูล Admin ลง localStorage
        localStorage.setItem("adminToken", response.data.token);
        localStorage.setItem("adminData", JSON.stringify(response.data.admin));

        navigate("/dashboard"); // ✅ นำไปหน้า Dashboard
      } else {
        setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง ❌");
      }
    } catch (err) {
      setError("เข้าสู่ระบบล้มเหลว กรุณาลองใหม่ ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }} // ✅ ใส่พื้นหลังเกม
    >
      <div className="bg-black bg-opacity-80 shadow-2xl rounded-lg p-8 w-96 border-2 border-purple-500">
        {/* ✅ Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Game Logo" className="w-24 h-24 drop-shadow-lg" />
        </div>

        <h2 className="text-3xl font-extrabold text-center text-purple-400 neon-text mb-6">
          ADMIN LOGIN
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
          {/* 📌 Email Input */}
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-300 text-lg" />
            <input
              type="email"
              className="pl-12 w-full p-3 bg-gray-900 text-white border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-400"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* 📌 Password Input */}
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-300 text-lg" />
            <input
              type="password"
              className="pl-12 w-full p-3 bg-gray-900 text-white border border-purple-500 rounded-md focus:ring-2 focus:ring-purple-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* 📌 Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-md hover:shadow-purple-500 hover:shadow-lg transition-all"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;