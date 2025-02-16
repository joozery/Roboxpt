import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import GmailIcon from "../../assets/logingmail.svg"; // นำเข้าไอคอน Gmail

const GetStartedModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false); // State เพื่อสลับ Login / Register
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-[#0f172a] text-white p-6 rounded-lg w-[400px] shadow-lg relative transition-transform transform scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ปุ่มปิด Modal */}
        <button className="absolute top-3 right-3 text-gray-400 hover:text-white" onClick={onClose}>
          &times;
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-2">
          {isLogin ? "Welcome Back!" : "Get Started!"}
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button 
                onClick={() => setIsLogin(false)} 
                className="text-[#005b96] hover:underline"
              >
                Register Here.
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button 
                onClick={() => setIsLogin(true)} 
                className="text-[#005b96] hover:underline"
              >
                Login Here.
              </button>
            </>
          )}
        </p>

        {/* Form */}
        <form className="space-y-4">
          {!isLogin && ( // แสดง Username เฉพาะ Register เท่านั้น
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

          {/* Submit Button */}
          <button className="w-full bg-[#005b96] hover:bg-[#03396c] p-3 rounded-md text-white font-semibold transition">
            {isLogin ? "Log In →" : "Get Started →"}
          </button>

          {/* Continue with Google */}
          <div className="text-center text-gray-400 text-sm mt-4">or continue with</div>
          <button className="w-full bg-[#1e293b] hover:bg-[#2d3c56] p-3 rounded-md text-gray-300 mt-2 flex items-center justify-center">
          <img src={GmailIcon} alt="Google Login" className="w-5 h-5 mr-2" />
            {isLogin ? "Log In with Google" : "Sign Up with Google"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedModal;