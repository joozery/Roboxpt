import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LiveChat from "./components/LiveChat/LiveChat";

// 📌 Import หน้าเว็บไซต์หลัก
import Home from "./pages/Home";
import Store from "./pages/Store";

// 📌 Import หน้า Dashboard
import Dashbord from "./components/Dashbord/Dashbord";
import Overview from "./components/Dashbord/page/Overview";
import Personal from "./components/Dashbord/page/Personal";
import UseCases from "./components/Dashbord/page/UseCases";
import ChatTemplates from "./components/Dashbord/page/ChatTemplates";
import AIVoices from "./components/Dashbord/page/AIVoices";
import Blogs from "./components/Dashbord/page/Blogs";
import Subscriptions from "./components/Dashbord/page/Subscriptions";
import Marketing from "./components/Dashbord/page/Marketing";
import Menus from "./components/Dashbord/page/Menus";
import WebsiteSetup from "./components/Dashbord/page/WebsiteSetup";
import MediaManager from "./components/Dashbord/page/MediaManager";
import SupportTickets from "./components/Dashbord/page/SupportTickets";
import Tools from "./components/Dashbord/page/Tools";
import StockItems from "./components/Dashbord/page/StockItems";

import "./App.css";

// 📌 Layout สำหรับหน้าเว็บหลัก
const Layout = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="flex">
      {!isDashboard && <Navbar />}
      <div className="flex-1">{children}</div>
      <LiveChat />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ เส้นทางของ Dashboard */}
        <Route path="/dashboard/*" element={<Dashbord />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="personal" element={<Personal />} />
          <Route path="use-cases" element={<UseCases />} />
          <Route path="chat-templates" element={<ChatTemplates />} />
          <Route path="ai-voices" element={<AIVoices />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="menus" element={<Menus />} />
          <Route path="website-setup" element={<WebsiteSetup />} />
          <Route path="media-manager" element={<MediaManager />} />
          <Route path="support-tickets" element={<SupportTickets />} />
          <Route path="tools" element={<Tools />} />
          <Route path="stock-items" element={<StockItems />} />
        </Route>

        {/* ✅ เส้นทางของเว็บไซต์หลัก */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/store" element={<Layout><Store /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
