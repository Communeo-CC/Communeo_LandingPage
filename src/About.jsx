import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Sanuri/Benefits";
import Collaboration from "./components/Sanuri/Collaboration";
import Footer from "./components/Sanuri/Footer";
import Header from "./components/Sanuri/Header";
import Pricing from "./components/Sanuri/Pricing";
import Roadmap from "./components/Sanuri/Roadmap";
import Services from "./components/Sanuri/Services";

import FUIFeatureSectionWithCards from "./components/Sanuri/FUIFeatureSectionWithCards";
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
