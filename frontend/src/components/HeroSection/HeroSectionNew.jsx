import React from "react";
import heroImage from "../../assets/789.png"; 
import heroBg from "../../assets/hero-image.png"; 

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* BG OVERLAY */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(25, 27, 49, 0.5)" }}></div>

      <div className="relative max-w-6xl mx-auto px-4 flex flex-col gap-8">
        
        {/* HEADER CENTERED */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Welcome to <span className="text-[#59C9FF]">PTStock</span>
          </h1>
          <div className="w-32 h-1 bg-[#59C9FF] mx-auto"></div>
        </div>

        {/* MAIN FLEX AREA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* LEFT */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              What <span className="text-[#59C9FF]">PTStock</span> Can Do ?
            </h2>
            <p className="text-lg font-bold text-yellow-400 mb-1">
              Fast, Easy & Safe <span className="text-white">with PTSOCK!</span>
            </p>
            <p className="text-sm text-gray-300 mb-6 max-w-md">
              PTStock is the fastest and most trusted store for BloxFruits, MM2, Plsual,
              Blox Diary, Adopt Me, and Anime Vanguards items. With our automated system,
              you get your favorite items instantly — no waiting, no worries!
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-medium shadow">
                Start Buying
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg text-sm font-medium shadow">
                Robux Store
              </button>
            </div>
          </div>

          {/* CENTER */}
          <div className="flex-1 flex justify-center">
            <img
              src={heroImage}
              alt="Hero Roblox"
              className="w-56 md:w-72 lg:w-80 drop-shadow-xl"
            />
          </div>

          {/* RIGHT */}
          <div className="flex-1">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white">
                Why we are the <span className="text-yellow-400">best</span> ?
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-200">
                <li>
                  ↳ <span className="font-bold text-white">Fast Top-up</span>{" "}
                  <span className="text-gray-400">via Bank Transfer, Credit Card, Promptpay, Binance</span>
                </li>
                <li>
                  ↳ <span className="font-bold text-white">100% Secure</span>{" "}
                  <span className="text-gray-400">We have good system to work on gifting item</span>
                </li>
                <li>
                  ↳ <span className="font-bold text-white">Easy to use</span>{" "}
                  <span className="text-gray-400">Our platform has comfort design to use functionality</span>
                </li>
                <li>
                  ↳ <span className="font-bold text-white">Good Price</span>{" "}
                  <span className="text-gray-400">Fair price, depending on market price</span>
                </li>
              </ul>

              <div className="flex gap-6 mt-4 text-center">
                <div>
                  <p className="text-white font-bold text-xl">5.9k+</p>
                  <p className="text-gray-400 text-xs">Number of users</p>
                </div>
                <div>
                  <p className="text-white font-bold text-xl">6.5k+</p>
                  <p className="text-gray-400 text-xs">Already sold</p>
                </div>
                <div>
                  <p className="text-white font-bold text-xl">100k+</p>
                  <p className="text-gray-400 text-xs">Stock Robux</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;