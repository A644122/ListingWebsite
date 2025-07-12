import React from "react";
import HeroSection from "../Components/HeroSection";
import CardSection from "../Components/CardSection";
import CryptoSection from "../Components/CryptoSection";
import PortfolioSection from "../Components/PortfolioSection";
import ServicesSection from "../Components/ServicesSection";
import CryptoProject from "../Components/CryptoProject";
import DeliverySection from "../Components/DeliverySection";
const Home = () => {
  return (
    <div className=" text-2xl ">
      <HeroSection />
      <CardSection />
      <CryptoSection />
      <PortfolioSection />
      <ServicesSection />
      <CryptoProject />
      <DeliverySection/>
    </div>
  );
};

export default Home;
