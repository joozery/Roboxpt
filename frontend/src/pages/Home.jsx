import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import OurGamesSection from "../components/OurGamesSection/OurGamesSection";
import CreatorSlider from "../components/CreatorSlider/CreatorSlider"; // Import the CreatorSlider
import Footer from "../components/Footer/Footer"; // Import Footer

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Our Games Section */}
      <div className="mt-[-7rem]"> {/* Adjust spacing here */}
        <OurGamesSection />
      </div>

      {/* Creator Slider Section */}
        <CreatorSlider />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;