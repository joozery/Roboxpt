import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // ✅ นำ Navbar มาใส่ที่ App.jsx
import Home from "./pages/Home";
import Store from "./pages/Store";
import LiveChat from "./components/LiveChat/LiveChat";

function App() {
  return (
    <Router>
      {/* ✅ Navbar แสดงทุกหน้า */}
      <Navbar />

      <Routes>
        {/* เส้นทางหน้าแรก */}
        <Route path="/" element={<Home />} />

        {/* เส้นทางร้านค้า */}
        <Route path="/store" element={<Store />} />
      </Routes>

      {/* ✅ LiveChat แสดงทุกหน้า */}
      <LiveChat />
    </Router>
  );
}

export default App;