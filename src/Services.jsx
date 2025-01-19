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




const App = () => {
  return (
    <>

      
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
