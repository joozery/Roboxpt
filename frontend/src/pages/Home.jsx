import React from "react";
import HeroSectionNew from "../components/HeroSection/HeroSectionNew";
import OurGamesSection from "../components/OurGamesSection/OurGamesSection";
import CreatorSlider from "../components/CreatorSlider/CreatorSlider";
import OurBestSellers from "../components/OurBestSellers/OurBestSellers";
import OurProductSection from "../components/OurProductSection/OurProductSection";
import SupportSliderSection from "../components/SupportSliderSection/SupportSliderSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSectionNew />

      {/* ✅ Our Product Section */}
      <OurProductSection />

      <SupportSliderSection />


      {/* Our Best Sellers Section */}
      <OurBestSellers />

      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;