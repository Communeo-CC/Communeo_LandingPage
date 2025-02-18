import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Hirushi/Benefits";
import ContactDetails from "./components/Hirushi/ContactDetails";
import Footer from "./components/Hirushi/Footer";
import Header from "./components/Hirushi/Header";

import Connect from "./components/Hirushi/Connect";
import connectWithIcons from "./components/Hirushi/connectWithIcons";
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
        <Connect />
        <connectWithIcons />
        <Footer />
      </div>

      <ButtonGradient />
      
    </>
  );
};

export default App;
