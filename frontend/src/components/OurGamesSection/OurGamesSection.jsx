import React from "react";
import BloxFruitsLogo from "../../assets/blox-fruits-logo.webp";
import RivalsLogo from "../../assets/rivals-logo.webp";
import PetsGoLogo from "../../assets/pets-go-logo.webp";
import AnimeVanguardsLogo from "../../assets/anime-vanguards-logo.webp";
import KingLegacyLogo from "../../assets/king-legacy-logo.webp";
import MM2Logo from "../../assets/mm2-logo.webp";

const games = [
  {
    title: "Blox Fruits",
    description: "Get powerful swords, fruits, and more to level up fast!",
    image: BloxFruitsLogo,
    buttonText: "View Items",
    buttonLink: "#",
    backgroundImage: BloxFruitsLogo,
  },
  {
    title: "Rivals",
    description: "Grab awesome gear and show everyone who's boss!",
    image: RivalsLogo,
    buttonText: "View Items",
    buttonLink: "#",
    backgroundImage: RivalsLogo,
  },
  {
    title: "Pets Go!",
    description: "Get the best items and collect more pets and gems than ever!",
    image: PetsGoLogo,
    buttonText: "View Items",
    buttonLink: "#",
    backgroundImage: PetsGoLogo,
  },
  {
    title: "Anime Vanguards",
    description: "Get top gear to become the strongest hero in the game!",
    image: AnimeVanguardsLogo,
    buttonText: "View Items",
    buttonLink: "#",
    backgroundImage: AnimeVanguardsLogo,
  },
  {
    title: "King Legacy",
    description: "Collect rare fruits, embark on epic adventures. Become the best!",
    image: KingLegacyLogo,
    buttonText: "View Items",
    buttonLink: "#",
    backgroundImage: KingLegacyLogo,
  },
  {
    title: "Murder Mystery 2",
    description: "Find cool weapons and gear to help you win every round!",
    image: MM2Logo,
    buttonText: "Soon!",
    buttonLink: null,
    backgroundImage: MM2Logo,
  },
];

const OurGamesSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Games</h2>
        <p className="text-gray-400 text-center mb-12">
          We sell the best items for your favorite Roblox games. Click on any game to see what's in store!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative flex bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                  backgroundImage: `url(${game.backgroundImage})`,
                  filter: "blur(10px)",
                }}
              ></div>

              {/* Image Section */}
              <div className="relative w-1/3">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover rounded-l-lg"
                />
              </div>

              {/* Content Section */}
              <div className="relative p-6 flex-1">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-gray-300 mb-4">{game.description}</p>
                {game.buttonLink ? (
                  <a
                    href={game.buttonLink}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
                  >
                    {game.buttonText} <span className="ml-2">→</span>
                  </a>
                ) : (
                  <span className="inline-block px-4 py-2 bg-gray-500 text-white rounded-md">
                    {game.buttonText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurGamesSection;