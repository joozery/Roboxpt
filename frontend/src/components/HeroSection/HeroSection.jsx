import React from "react";
import CharacterSection from "./CharacterSection"; // Import ส่วนที่แยกมา

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Trustpilot Section */}
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
            <img
              src="https://companieslogo.com/img/orig/TRST.L-5ada9c92.png?t=1720244494"
              alt="Trustpilot"
              className="w-5"
            />
            <span className="text-green-400 font-bold">★★★★★</span>
            <span className="text-sm text-gray-400">210+ 5 Star Reviews</span>
          </div>
          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Buy Roblox Items <br />
            <span className="text-blue-500">Fast, Easy & Safe</span> with PTSOCK!
          </h1>
          {/* Description */}
          <p className="text-gray-400 mb-8">
            PTstock is the fastest and most trusted store for BloxFruits,
            MM2, Rivals, Blade ball, Adopt me, and Anime Vanguards items. With
            our automated system, you get your favorite items instantly—no
            waiting, no worries!
          </p>
          {/* Call to Action Button */}
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
            Start Buying
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center">
          <CharacterSection /> {/* แสดง Character Section */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;