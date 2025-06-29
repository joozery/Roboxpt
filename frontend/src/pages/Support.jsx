import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer/Footer";

const faqs = [
  {
    question: "What is PTSTOCK ?",
    answer:
      "PTSTOCK is the best place to buy cool in-game items for your favorite Roblox games.\nWe have everything from rare weapons to awesome pets and power-ups!",
  },
  {
    question: "Can I get refund after purchase ?",
    answer:
      "You can refund after purchase in case that you're in the condition of refunding. See more in *Term of Service*",
  },
  {
    question: "How you redeem the code ?",
    answer:
      "You need to join our discord server and redeem the code with bots. After redeemed, you will get service (gifting item) by our officers.",
  },
  {
    question: "How fast the delivery ?",
    answer:
      "We have officers that working for 24/7. You can get your item after the order is done. We working order-by-order, please don't rush. 100% you will get your item.",
  },
];

const pdfLinks = [
  {
    title: "TERM OF SERVICE",
    link: "/pdfs/term-of-service.pdf",
  },
  {
    title: "REFUND POLICY",
    link: "/pdfs/refund-policy.pdf",
  },
  {
    title: "SELLER POLICY",
    link: "/pdfs/seller-policy.pdf",
  },
  {
    title: "WITHDRAW POLICY",
    link: "/pdfs/withdraw-policy.pdf",
  },
];

const Support = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <>
      <motion.div
        className="min-h-screen bg-[#0f1125] text-white pt-24 pb-24 font-['Prompt']"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold">Support</h1>
          <p className="text-sm text-gray-400">
            If you have a problem to using our website , you can contact us freely
          </p>
          <div className="w-28 h-1 bg-blue-400 mt-2 mx-auto rounded-full" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-[#1d1f3b] p-1 rounded-full flex gap-1 w-[400px] max-w-full">
            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.06, boxShadow: '0 2px 16px 0 rgba(59,130,246,0.15)' }}
              onClick={() => setActiveTab("general")}
              className={`flex-1 py-2 rounded-full transition-all text-sm ${
                activeTab === "general" ? "bg-blue-500 text-white shadow-sm" : "text-gray-300 hover:bg-[#2d3355] hover:text-white"
              }`}
              aria-selected={activeTab === "general"}
              role="tab"
              tabIndex={0}
              style={{ outline: activeTab === "general" ? '2px solid #3b82f6' : 'none', outlineOffset: '2px' }}
            >
              General
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.06, boxShadow: '0 2px 16px 0 rgba(59,130,246,0.15)' }}
              onClick={() => setActiveTab("terms")}
              className={`flex-1 py-2 rounded-full transition-all text-sm ${
                activeTab === "terms" ? "bg-blue-500 text-white shadow-sm" : "text-gray-300 hover:bg-[#2d3355] hover:text-white"
              }`}
              aria-selected={activeTab === "terms"}
              role="tab"
              tabIndex={0}
              style={{ outline: activeTab === "terms" ? '2px solid #3b82f6' : 'none', outlineOffset: '2px' }}
            >
              Term of Service
            </motion.button>
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 min-h-[320px]">
          <AnimatePresence mode="wait">
            {activeTab === "general" && (
              <motion.div
                key="general"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1c1e3a] p-6 rounded-lg space-y-6"
              >
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <p className="text-white font-semibold">
                      #{index + 1} {faq.question}
                    </p>
                    <p className="text-gray-300 text-sm mt-1 whitespace-pre-line">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
            {activeTab === "terms" && (
              <motion.div
                key="terms"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6"
              >
                {pdfLinks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-[#1e2140] to-[#2e3270] p-6 rounded-xl border border-white/20 shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-yellow-400 text-center mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-center text-white mb-4">
                      We've written these terms to help you understand how our services work,
                      what you can expect from us, and what we ask of you in return
                    </p>
                    <div className="flex justify-center">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-1 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition"
                      >
                        CLICK HERE
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Support;
