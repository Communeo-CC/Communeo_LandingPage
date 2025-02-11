import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Hirushi/Benefits";
import ContactDetails from "./components/Hirushi/ContactDetails";
import Footer from "./components/Hirushi/Footer";
import Header from "./components/Hirushi/Header";

import Pricing from "./components/Hirushi/Pricing";
import Roadmap from "./components/Hirushi/Roadmap";
import LocationDetails from "./components/Hirushi/LocationDetails";

import Form from "./components/Hirushi/Form";
import GradualSpacing from "./components/ui/GradualSpacing";



const App = () => {
  return (
    <>
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <GradualSpacing/>
        {/* SpotlightPreview is a custom component */}
        <Benefits />
        <Form />
        <ContactDetails />
        <LocationDetails />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
      
    </>
  );
};

export default App;
