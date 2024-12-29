import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

import FUIFeatureSectionWithCards from "./components/FUIFeatureSectionWithCards";
import GradualSpacing from "./components/ui/GradualSpacing";
import FluidCursorDemo from "../src/components/FluidCursorDemo"



const Home = () => {
  return (
    <>
      
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <GradualSpacing/>
        {/* SpotlightPreview is a custom component */}
        <Benefits />
        <FUIFeatureSectionWithCards />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
        
      </div>

      <ButtonGradient />
      
    </>
  );
};

export default Home;
