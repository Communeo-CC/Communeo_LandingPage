import React from 'react'
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Kaveesha/Benefits";
import Collaboration from "./components/Kaveesha/Collaboration";
import Footer from "./components/Kaveesha/Footer";
import Header from "./components/Kaveesha/Header";

import Pricing from "./components/Kaveesha/Pricing";
import Roadmap from "./components/Kaveesha/Roadmap";
import Services from "./components/Kaveesha/Services";

import FUIFeatureSectionWithCards from "./components/Kaveesha/FUIFeatureSectionWithCards";
import GradualSpacing from "./components/ui/GradualSpacing";


import { HeroSection } from "./components/Kaveesha/HeroSection"
import { FeaturesSection } from "./components/Kaveesha/FeaturesSection"
import { AnalyticsSection } from "./components/Kaveesha/AnalyticsSection"

export default function Services() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AnalyticsSection />
      <Footer />
    </main>
    
  )
}
