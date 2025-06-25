import React, { useState } from "react";
import { motion } from "framer-motion";
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
      "We have officers that working for 24/7. You can get your item after the order is done. We working order-by-order, please don’t rush. 100% you will get your item.",
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Support</h1>
          <p className="text-sm text-gray-400">
            If you have a problem to using our website , you can contact us freely
          </p>
          <div className="w-28 h-1 bg-blue-400 mt-2 mx-auto rounded-full" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#1d1f3b] p-1 rounded-full flex gap-1 w-[400px] max-w-full">
            <button
              onClick={() => setActiveTab("general")}
              className={`flex-1 py-2 rounded-full transition-all text-sm ${
                activeTab === "general" ? "bg-blue-500 text-white" : "text-gray-300"
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`flex-1 py-2 rounded-full transition-all text-sm ${
                activeTab === "terms" ? "bg-blue-500 text-white" : "text-gray-300"
              }`}
            >
              Term of Service
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4">
          {activeTab === "general" && (
            <div className="bg-[#1c1e3a] p-6 rounded-lg space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <p className="text-white font-semibold">#{index + 1} {faq.question}</p>
                  <p className="text-gray-300 text-sm mt-1 whitespace-pre-line">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "terms" && (
            <div className="bg-[#1c1e3a] p-6 rounded-lg text-gray-300 text-sm leading-relaxed">
              <h2 className="text-white font-semibold text-lg mb-2">Terms of Service</h2>
              <p>
                Please read our terms before making a purchase. All sales are final unless the item
                was not delivered due to system error or other qualifying conditions.
              </p>
              <p className="mt-2">
                Refunds will be handled only under specific scenarios as mentioned. Contact our
                support for more details.
              </p>
            </div>
          )}
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Support;
