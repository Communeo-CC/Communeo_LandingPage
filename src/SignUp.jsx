import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Thamindu/Benefits";
import Collaboration from "./components/Thamindu/Collaboration";
import Footer from "./components/Thamindu/Footer";
import Header from "./components/Thamindu/Header";

import Pricing from "./components/Thamindu/Pricing";
import Roadmap from "./components/Thamindu/Roadmap";
import Services from "./components/Thamindu/Services";

import FUIFeatureSectionWithCards from "./components/Thamindu/FUIFeatureSectionWithCards";
import GradualSpacing from "./components/ui/GradualSpacing";
import FluidCursorDemo from "../src/components/Thamindu/FluidCursorDemo"



const App = () => {
  return (
    <>
      <FluidCursorDemo />
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
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

export default App;
