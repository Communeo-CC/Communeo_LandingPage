import React from 'react'
import Footer from "./components/Kaveesha/Footer";
import Header from "./components/Kaveesha/Header";

import { HeroSection } from "./components/Kaveesha/HeroSection"
import { FeaturesSection } from "./components/Kaveesha/FeaturesSection"
import { AnalyticsSection } from "./components/Kaveesha/AnalyticsSection"

const ServicesPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <AnalyticsSection />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default ServicesPage;

