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
import Section from "./components/Sanuri/Section";
import Heading from "./components/Sanuri/Heading";
import TagLine from "./components/Sanuri/Tagline";

import { teamPhoto1, teamPhoto2, teamPhoto3, check } from "./assets/assetsnew";
import { teamDetails, missionPoints } from "./components/Sanuri/Constants";
import { Gradient } from "./components/Sanuri/Design/Gradient";

import TeamCard from "./components/Sanuri/TeamCard";
import MissionCard from "./components/Sanuri/MissionCard";



const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <GradualSpacing/>
      {/* SpotlightPreview is a custom component */}
      <Heading />
      <Section />
      <TeamCard />
      <TagLine />
      <MissionCard />
      <Benefits />
      <FUIFeatureSectionWithCards />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
      <ButtonGradient />
    </div>
  );
};

export default App;
