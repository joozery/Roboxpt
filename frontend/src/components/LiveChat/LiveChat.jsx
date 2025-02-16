import React, { useState } from "react";

const LiveChat = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");

  // ฟังก์ชันเปิด/ปิดแชท
  const toggleChat = () => {
    setShowChat(!showChat);
  };

  // ฟังก์ชันส่งข้อความ
  const sendMessage = () => {
    if (message.trim()) {
      alert(`ส่งข้อความ: ${message}`);
      setMessage(""); // ลบข้อความในช่อง input หลังจากส่ง
    }
  };

  return (
    <div>
      {/* ปุ่มสำหรับเปิด/ปิดแชท */}
      <button
        onClick={toggleChat}
        className="fixed bottom-20 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:bg-blue-700"
      >
        <img 
          src="https://img.icons8.com/windows/32/chat.png" 
          alt="Chat Icon" 
          className="w-6 h-6"
        />
      </button>

      {/* แชท Popup */}
      {showChat && (
        <div className="fixed bottom-28 right-5 w-80 max-w-xs bg-white shadow-xl rounded-lg z-50 transition-all duration-500 ease-in-out transform translate-y-0 opacity-100">
          <div className="flex justify-between items-center bg-blue-600 p-4 rounded-t-lg">
            <span className="text-white font-semibold text-lg">Customer Support</span>
            <button
              onClick={toggleChat}
              className="text-white text-xl font-semibold"
            >
              &times;
            </button>
          </div>
          <div className="p-6 bg-gray-100 flex-1 overflow-y-auto">
            <p className="text-gray-600 mb-4 text-sm">How can we help you today?</p>
            <div className="space-y-4">
              {/* ข้อความแชท */}
              <div className="flex items-center space-x-2">
                <div className="bg-blue-500 text-white p-2 rounded-full w-8 h-8 flex justify-center items-center">
                  {/* รูปไอคอน */}
                  <span className="text-xl">💬</span>
                </div>
                <p className="text-gray-700 text-sm">We are here to help you!</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-200 rounded-b-lg">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-3 rounded border-2 border-gray-300 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;