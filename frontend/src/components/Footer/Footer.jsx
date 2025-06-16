import React from "react";
import {
  FaTiktok,
  FaDiscord,
  FaYoutube
} from "react-icons/fa";
import {
  SiMastercard,
  SiPaypal,
  SiVisa
} from "react-icons/si";
import logo from "../../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="font-['Prompt']">
      {/* Top Section */}
      <div className="bg-[#151733] text-white px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          {/* Logo & Description */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="logo" className="w-10 h-10" />
              <h2 className="text-2xl font-bold" style={{ color: "#59C9FF" }}>
  PTSTOCK
</h2>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              PT Stock is the top marketplace to buy rare and awesome Roblox items.
              With lightning-fast delivery and secure payments, we've helped thousands
              of gamers get the items they love.
            </p>
          </div>

          {/* Menu Sections */}
          <div className="grid grid-cols-3 gap-10 text-sm">
            <div>
              <h3 className="font-semibold text-white mb-3">Social Media</h3>
              <div className="flex gap-3 text-white text-xl">
                <FaTiktok className="bg-blue-500 p-1 rounded-md w-7 h-7" />
                <FaDiscord className="bg-blue-500 p-1 rounded-md w-7 h-7" />
                <FaYoutube className="bg-blue-500 p-1 rounded-md w-7 h-7" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Support</h3>
              <ul className="text-gray-300 space-y-1">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Live Chat</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Legal</h3>
              <ul className="text-gray-300 space-y-1">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#1e3c72] px-6 py-4 text-white text-sm flex flex-col md:flex-row justify-between items-center">
        <span className="text-xs">PTStock © 2025, All Rights Reserved</span>
        <div className="flex items-center gap-6 text-2xl mt-2 md:mt-0">
          <SiMastercard />
          <SiPaypal />
          <SiVisa />
        </div>
      </div>
    </footer>
  );
};

export default Footer;