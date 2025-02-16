import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SidebarStore from "../components/SidebarStore/SidebarStore";
import MainContent from "../components/MainContent/MainContent";

const Store = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white">
      {/* Navbar */}
      <Navbar />

      {/* Store Layout */}
      <div className="flex pt-[60px]"> {/* เพิ่ม padding-top เพื่อเว้นจาก Navbar */}
        {/* Sidebar */}
        <SidebarStore />

        {/* Content Section */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Best Sellers</h1>
          <p className="text-gray-400">Find the best items for your favorite games.</p>

          {/* Main Content */}
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Store;