import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Vidul/Benefits";
import Collaboration from "./components/Vidul/Collaboration";
import Footer from "./components/Vidul/Footer";
import Header from "./components/Vidul/Header";
import Pricing from "./components/Vidul/Pricing";
import Roadmap from "./components/Vidul/Roadmap";
import Services from "./components/Vidul/Services";

import FUIFeatureSectionWithCards from "./components/Vidul/FUIFeatureSectionWithCards";
import GradualSpacing from "./components/ui/GradualSpacing";
import FluidCursorDemo from "../src/components/Vidul/FluidCursorDemo"



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
