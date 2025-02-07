import React from "react";
import BackgroundImage from "../../assets/Coverfooter.jpg"; // Import the background image

const Footer = () => {
  return (
    <footer
      className="relative bg-gray-900 text-gray-400 py-10"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          {/* Logo and Description */}
          <div className="lg:w-1/3 z-10">
            <h2 className="text-white text-2xl font-bold mb-2">PTSTOCK</h2>
            <p className="mb-4">
              BloxyFruits is the top marketplace to buy rare and awesome Roblox
              items. With lightning-fast delivery and secure payments, we've
              helped thousands of gamers get the items they love.
            </p>
            <p>
              BloxyFruits is not affiliated with Roblox Corporation. All in-game
              assets are the property of their respective owners.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:w-1/3 grid grid-cols-3 gap-6 mt-8 lg:mt-0 z-10">
            <div>
              <h3 className="text-white font-semibold mb-2">Social Media</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">TikTok</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Live Chat</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <p className="mb-4 lg:mb-0">
            BloxyFruit © {new Date().getFullYear()}, All Rights Reserved
          </p>
          <div className="flex space-x-4">
            <img
              src="https://via.placeholder.com/40x24"
              alt="MasterCard"
              className="h-6"
            />
            <img
              src="https://via.placeholder.com/40x24"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://via.placeholder.com/40x24"
              alt="PayPal"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;