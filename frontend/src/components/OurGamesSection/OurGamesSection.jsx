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
    <section className="relative mt-[-1px] py-16 px-8 bg-gradient-to-b from-[#03396c] via-[#01327b] to-[#06131b] backdrop-blur-md text-[#b3cde0] overflow-hidden">
      <div className="container mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-6 text-center drop-shadow-lg">Our Games</h2>
        <p className="text-[#b3cde0] text-center mb-12 opacity-90">
          We sell the best items for your favorite Roblox games. Click on any game to see what's in store!
        </p>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative flex bg-[#03396c] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                  backgroundImage: `url(${game.backgroundImage})`,
                  filter: "blur(8px)",
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
                <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg">{game.title}</h3>
                <p className="text-[#b3cde0] opacity-90 mb-4">{game.description}</p>

                {/* Call to Action Button */}
                {game.buttonLink ? (
                  <a
                    href={game.buttonLink}
                    className="inline-flex items-center px-4 py-2 bg-[#005b96] hover:bg-[#03396c] text-white rounded-md shadow-lg transition-all hover:scale-105"
                  >
                    {game.buttonText} <span className="ml-2">→</span>
                  </a>
                ) : (
                  <span className="inline-block px-4 py-2 bg-gray-500 text-white rounded-md opacity-70">
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