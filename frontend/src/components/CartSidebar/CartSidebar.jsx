import React, { useState } from "react";
import { FaShoppingCart, FaMinus, FaPlus } from "react-icons/fa";
import mastercardLogo from "../../assets/MasterCard.png"; // ใส่โลโก้ของบัตร
import paypalLogo from "../../assets/MasterCard.png";
import visaLogo from "../../assets/MasterCard.png";

const CartSidebar = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Winter Combo",
      price: 1434.8,
      oldPrice: 1655.6,
      image: "/assets/winter-combo.png",
      quantity: 1,
    },
  ]);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountThreshold = 3680; // Spend ฿3,680 to get ฿368 off
  const discount = totalAmount >= discountThreshold ? 368 : 0;

  // เพิ่มหรือลดจำนวนสินค้า
  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  return (
    <div className="bg-[#0f172a] text-white w-80 h-screen p-6 rounded-lg shadow-lg space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      {/* Cart Header */}
      <div className="flex items-center space-x-2 text-lg font-semibold">
        <FaShoppingCart className="text-blue-400" />
        <span>Cart</span>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-[#1e293b] p-3 rounded-md">
            <div className="flex items-center space-x-3">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
              <div>
                <h3 className="text-white font-semibold">{item.name}</h3>
                <div className="text-gray-400 text-sm line-through">฿{item.oldPrice.toFixed(1)}</div>
                <div className="text-white font-bold">฿{item.price.toFixed(1)}</div>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-700 p-2 rounded-md hover:bg-gray-600"
                onClick={() => updateQuantity(item.id, -1)}
              >
                <FaMinus className="text-white text-xs" />
              </button>
              <span className="text-white">{item.quantity}</span>
              <button
                className="bg-gray-700 p-2 rounded-md hover:bg-gray-600"
                onClick={() => updateQuantity(item.id, 1)}
              >
                <FaPlus className="text-white text-xs" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Discount Progress */}
      <div className="bg-[#1e293b] p-4 rounded-md text-center">
        <p className="text-gray-300 text-sm">
          Spend <span className="text-blue-400 font-bold">฿{discountThreshold.toFixed(1)}</span>, Get{" "}
          <span className="text-green-400 font-bold">฿{discount.toFixed(1)}</span> Off!
        </p>
        <div className="w-full bg-gray-800 h-2 rounded-full mt-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${(totalAmount / discountThreshold) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>$0</span>
          <span>$100</span>
        </div>
      </div>

      {/* Total Price */}
      <div className="flex justify-between text-lg font-bold">
        <span>Total Price</span>
        <span>฿{totalAmount.toFixed(1)}</span>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
        Checkout
      </button>

      {/* Payment Methods */}
      <div className="flex justify-center space-x-4 mt-4">
        <img src={mastercardLogo} alt="Mastercard" className="w-10" />
        <img src={paypalLogo} alt="PayPal" className="w-10" />
        <img src={visaLogo} alt="Visa" className="w-10" />
      </div>
    </div>
  );
};

export default CartSidebar;