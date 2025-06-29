import React from "react";
import { useLocation } from "react-router-dom";

// 📌 Import ไฟล์จาก `./components/Dashbord/page/`
import Overview from "./page/Overview";
import Personal from "./page/Personal";
import UseCases from "./page/UseCases";
import ChatTemplates from "./page/ChatTemplates";
import AIVoices from "./page/AIVoices";
import Blogs from "./page/Blogs";
import Subscriptions from "./page/Subscriptions";
import Marketing from "./page/Marketing";
import Menus from "./page/Menus";
import WebsiteSetup from "./page/WebsiteSetup";
import MediaManager from "./page/MediaManager";
import SupportTickets from "./page/SupportTickets";
import Tools from "./page/Tools";
import StockItems from "./page/StockItems"; 
import ManagePayments from "./page/ManagePayments"; // ✅ เพิ่มเมนู Payment
import PaymentReports from "./page/PaymentReports"; // ✅ เพิ่มเมนู Payment
import TransactionHistory from "./page/TransactionHistory"; // ✅ เพิ่มเมนู Payment
import TopUpRobuxManagement from "./page/TopUpRobuxManagement"; // ✅ เพิ่มเมนูจัดการ TopUp Robux
import ManageAdmins from "./page/ManageAdmins"; // ✅ เพิ่มเมนู จัดการแอดมิน
import CheckSlips from "./page/CheckSlips";

const MainContent = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      {currentPath.startsWith("/dashboard/overview") && <Overview />}
      {currentPath.startsWith("/dashboard/personal") && <Personal />}
      {currentPath.startsWith("/dashboard/use-cases") && <UseCases />}
      {currentPath.startsWith("/dashboard/chat-templates") && <ChatTemplates />}
      {currentPath.startsWith("/dashboard/ai-voices") && <AIVoices />}
      {currentPath.startsWith("/dashboard/blogs") && <Blogs />}
      {currentPath.startsWith("/dashboard/subscriptions") && <Subscriptions />}
      {currentPath.startsWith("/dashboard/marketing") && <Marketing />}
      {currentPath.startsWith("/dashboard/menus") && <Menus />}
      {currentPath.startsWith("/dashboard/website-setup") && <WebsiteSetup />}
      {currentPath.startsWith("/dashboard/media-manager") && <MediaManager />}
      {currentPath.startsWith("/dashboard/support-tickets") && <SupportTickets />}
      {currentPath.startsWith("/dashboard/tools") && <Tools />}
      {currentPath === "/dashboard/stock-items" && <StockItems />}
      {currentPath === "/dashboard/manage-payments" && <ManagePayments />} {/* ✅ เมนูใหม่ */}
      {currentPath === "/dashboard/payment-reports" && <PaymentReports />} {/* ✅ เมนูใหม่ */}
      {currentPath === "/dashboard/transaction-history" && <TransactionHistory />} {/* ✅ เมนูใหม่ */}
      {currentPath === "/dashboard/topup-robux-management" && <TopUpRobuxManagement />} {/* ✅ เพิ่มเมนูใหม่ */}

      {/* ✅ เพิ่มเมนู "จัดการแอดมิน" และ "จัดการบทบาท" */}
      {currentPath === "/dashboard/manage-admins" && <ManageAdmins />}

      {currentPath === "/dashboard/check-slips" && <CheckSlips />}

      {/* Default Dashboard Content */}
      {currentPath === "/dashboard" && (
        <>
          <h1 className="text-3xl font-bold">ยินดีต้อนรับสู่ Dashboard</h1>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-md">📊 ข้อมูลสถิติที่ 1</div>
            <div className="bg-white p-4 rounded-lg shadow-md">📈 ข้อมูลสถิติที่ 2</div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainContent;