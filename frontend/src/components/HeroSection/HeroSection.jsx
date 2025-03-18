import React from "react";
import CharacterSection from "./CharacterSection";
import bgImage from "../../assets/bgmian.png"; // ✅ เปลี่ยน path ให้ถูกต้อง

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Overlay + Blur (ช่วยทำให้ตัวอักษรชัดขึ้น) */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          
          {/* Trustpilot Section */}
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
            <img
              src="https://companieslogo.com/img/orig/TRST.L-5ada9c92.png?t=1720244494"
              alt="Trustpilot"
              className="w-5"
            />
            <span className="text-green-400 font-bold drop-shadow-md">★★★★★</span>
            <span className="text-sm text-[#b3cde0] opacity-90">210+ 5 Star Reviews</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-[#b3cde0] drop-shadow-lg">
            Buy Roblox Items <br />
            <span className="text-white bg-clip-text text-transparent bg-gradient-to-r from-[#005b96] to-[#b3cde0]">
              Fast, Easy & Safe
            </span> with PTSOCK!
          </h1>

          {/* Description */}
          <p className="text-[#b3cde0] opacity-95 mb-8 leading-relaxed drop-shadow-sm">
            PTstock is the fastest and most trusted store for BloxFruits, MM2, 
            Rivals, Blade Ball, Adopt Me, and Anime Vanguards items. 
            With our automated system, you get your favorite items instantly—no waiting, no worries!
          </p>

          {/* Call to Action Button */}
          <button className="bg-[#005b96] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#03396c] hover:scale-105 transition-all duration-300">
            Start Buying
          </button>
        </div>

        {/* Right Section - Guardian Character */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative">
          <CharacterSection />
          {/* Glow Effect */}
          <div className="absolute w-40 h-40 bg-[#005b96] opacity-30 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;