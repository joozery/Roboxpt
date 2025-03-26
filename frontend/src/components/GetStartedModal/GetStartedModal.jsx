import React, { useState, useContext } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { UserContext } from "../../context/UserContext"; // ✅ ดึง Context มาใช้

const GetStartedModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(UserContext); // ✅ ดึง setUser จาก Context

  if (!isOpen) return null;

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      const res = await axios.post("https://serverpt-6497ec45bb3e.herokuapp.com/api/auth/google-login", {
        token,
      });

      console.log("✅ Login Success:", res.data);

      // ✅ เก็บ token และ user info
      localStorage.setItem("userToken", res.data.token);
      localStorage.setItem("userInfo", JSON.stringify(res.data.user));

      setUser(res.data.user); // ✅ อัปเดต Context เพื่อให้ Navbar แสดงชื่อผู้ใช้
      onClose(); // ✅ ปิด modal
    } catch (error) {
      console.error("❌ Login Error:", error);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-[#0f172a] text-white p-6 rounded-lg w-[400px] shadow-lg relative transition-transform transform scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-3 right-3 text-gray-400 hover:text-white" onClick={onClose}>
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-2">
          {isLogin ? "Welcome Back!" : "Get Started!"}
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          {isLogin ? (
            <>Don't have an account?{" "}
              <button onClick={() => setIsLogin(false)} className="text-[#005b96] hover:underline">
                Register Here.
              </button>
            </>
          ) : (
            <>Already have an account?{" "}
              <button onClick={() => setIsLogin(true)} className="text-[#005b96] hover:underline">
                Login Here.
              </button>
            </>
          )}
        </p>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="text-sm">Username</label>
              <input 
                type="text" 
                placeholder="Please choose a username" 
                className="w-full p-3 bg-[#1e293b] rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
              />
            </div>
          )}
          <div>
            <label className="text-sm">{isLogin ? "Username/Email" : "Email"}</label>
            <input 
              type="email" 
              placeholder="Please enter your email" 
              className="w-full p-3 bg-[#1e293b] rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
            />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                className="w-full p-3 bg-[#1e293b] rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
              />
              <button 
                type="button"
                className="absolute top-3 right-3 text-gray-400 hover:text-[#005b96]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
          </div>

          {isLogin ? (
            <p className="text-sm text-gray-400">
              Forgot password?{" "}
              <a href="#" className="text-[#005b96] hover:underline">Recover it here.</a>
            </p>
          ) : (
            <div className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              <span>
                I agree to the <a href="#" className="text-[#005b96] hover:underline">Terms of Service</a> and <a href="#" className="text-[#005b96] hover:underline">Privacy Policy</a>.
              </span>
            </div>
          )}

          <button className="w-full bg-[#005b96] hover:bg-[#03396c] p-3 rounded-md text-white font-semibold transition">
            {isLogin ? "Log In →" : "Get Started →"}
          </button>

          {/* Google Login */}
          <div className="text-center text-gray-400 text-sm mt-4">or continue with</div>
          <div className="mt-2 flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => console.log("❌ Google Login Failed")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetStartedModal;