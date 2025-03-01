import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Visal/Benefits";
import Collaboration from "./components/Visal/Collaboration";
import Footer from "./components/Visal/Footer";
import Header from "./components/Visal/Header";
import Hero from "./components/Visal/Hero";
import Pricing from "./components/Visal/Pricing";
import Roadmap from "./components/Visal/Roadmap";
import Services from "./components/Visal/Services";
import FUIFeatureSectionWithCards from "./components/Visal/FUIFeatureSectionWithCards";
import GradualSpacing from "./components/ui/GradualSpacing";
import FluidCursorDemo from "./components/Sanuri/FluidCursorDemo";



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
