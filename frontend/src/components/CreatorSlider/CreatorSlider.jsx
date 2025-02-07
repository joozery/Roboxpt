import React from "react";

const creators = [
  {
    name: "GatoGod",
    platform: "BloxFruits",
    subscribers: "562k subscribers",
    username: "@gatogod",
    icon: "https://via.placeholder.com/40", // Replace with the creator's icon
  },
  {
    name: "Gnoren Dog",
    platform: "BloxFruits",
    subscribers: "204k subscribers",
    username: "@GnorenDog",
    icon: "https://via.placeholder.com/40", // Replace with the creator's icon
  },
  {
    name: "LegoBlox",
    platform: "BloxFruits",
    subscribers: "268k subscribers",
    username: "@LegoBlox",
    icon: "https://via.placeholder.com/40", // Replace with the creator's icon
  },
  {
    name: "Zeer YT",
    platform: "BloxFruits",
    subscribers: "71k subscribers",
    username: "@ZeerTheGoat",
    icon: "https://via.placeholder.com/40", // Replace with the creator's icon
  },
  {
    name: "NataBlox",
    platform: "BloxFruits",
    subscribers: "512k subscribers",
    username: "@NataBlox",
    icon: "https://via.placeholder.com/40", // Replace with the creator's icon
  },
];

const CreatorSlider = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-4 text-center">
          Trusted by <span className="text-blue-400">Top Roblox Creators</span>
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Join thousands of happy gamers who trust BloxFruits for their in-game
          items! The biggest Roblox content creators and YouTubers use and
          recommend us. Check out some of our amazing supporters below:
        </p>

        {/* Slider */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6">
            {creators.map((creator, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-gradient-to-br from-gray-800 to-gray-700 p-4 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                {/* Creator Icon */}
                <img
                  src={creator.icon}
                  alt={creator.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                {/* Creator Name */}
                <h3 className="text-lg font-semibold">{creator.name}</h3>
                {/* Creator Username */}
                <p className="text-sm text-gray-400">{creator.username}</p>
                {/* Platform */}
                <span className="text-blue-400 text-sm mt-2">
                  {creator.platform}
                </span>
                {/* Subscribers */}
                <p className="text-sm text-gray-500">{creator.subscribers}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSlider;