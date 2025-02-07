import React from "react";
import CharacterImage from "../../assets/character.png"; // Import รูปคาแรกเตอร์
import GhostImage from "../../assets/Ghost.webp"; // Import รูป Ghost
import ShadowImage from "../../assets/Shadow.webp"; // Import รูป Shadow
import PatternImage from "../../assets/pattern.webp"; // Import รูป Pattern

const CharacterSection = () => {
  return (
    <div className="relative flex justify-center items-center">
      {/* Portal Item */}
      <div className="absolute   left-[-60px] bg-gradient-to-br from-blue-30 to-blue-500 bg-opacity-40 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center transform -rotate-6 z-20 w-56 animate-bounce-alt-slow">
        <span className="text-pink-400 font-bold text-sm absolute top-2 left-2 bg-pink-900 px-2 py-1 rounded-full">
          Legendary
        </span>
        <img
          src={GhostImage}
          alt="Portal"
          className="w-28 mx-auto my-4"
        />
        <p className="text-gray-400 text-xs">Permanent Fruit</p>
        <p className="text-white font-bold">Portal</p>
        <p className="text-green-400 font-bold">$15.15</p>
        <p className="text-gray-400 line-through text-sm">$17.32</p>
        {/* Cart Button */}
        <button className="absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l1.4-7H6.4m-3.4 7h1m4 0h10m-10 4a2 2 0 104 0m-4 0a2 2 0 11-4 0"
            />
          </svg>
        </button>
      </div>

      {/* Character */}
      <div className="relative z-10">
        {/* Pattern Background */}
        <img
          src={PatternImage}
          alt="Pattern"
          className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[790px] h-[550px] opacity-30 z-[-1]"
        />
        <img
          src={CharacterImage}
          alt="Character"
          className="w-[300px] lg:w-[560px] mx-auto"
        />
      </div>

      {/* Rumble Item */}
      <div className="absolute right-[-130px] bg-gradient-to-br from-purple-30 to-purple-600 bg-opacity-40 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center transform rotate-6 z-20 w-56 animate-bounce-slow">
        <span className="text-pink-400 font-bold text-sm absolute top-2 left-2 bg-pink-900 px-2 py-1 rounded-full">
          Legendary
        </span>
        <img
          src={ShadowImage}
          alt="Rumble"
          className="w-28 mx-auto my-4"
        />
        <p className="text-gray-400 text-xs">Permanent Fruit</p>
        <p className="text-white font-bold">Rumble</p>
        <p className="text-green-400 font-bold">$13.53</p>
        <p className="text-gray-400 line-through text-sm">$16.24</p>
        {/* Cart Button */}
        <button className="absolute bottom-2 right-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full p-2 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l1.4-7H6.4m-3.4 7h1m4 0h10m-10 4a2 2 0 104 0m-4 0a2 2 0 11-4 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CharacterSection;