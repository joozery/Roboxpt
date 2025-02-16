import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import OurGamesSection from "../components/OurGamesSection/OurGamesSection";
import CreatorSlider from "../components/CreatorSlider/CreatorSlider";
import OurBestSellers from "../components/OurBestSellers/OurBestSellers";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Our Games Section */}
      <div className="mt-[-7rem]"> {/* Adjust spacing here */}
        <OurGamesSection />
      </div>

      {/* Creator Slider Section */}
      <CreatorSlider />

      {/* Our Best Sellers Section */}
      <OurBestSellers />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;