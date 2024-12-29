import { Routes, Route } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./SignUp";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
