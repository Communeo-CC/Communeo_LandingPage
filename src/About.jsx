
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
import { Gradient } from "./components/Sanuri/assets";
import { teamPhotos, missionPoints, uniqueFeatures } from "./components/Sanuri/Constants";
import { Gradient } from "./components/Sanuri/Design/Gradient";
import TeamCard from "./components/Sanuri/TeamCard";
import MissionCard from "./components/Sanuri/MissionCard";
import FeatureCard from "./components/Sanuri/FeatureCard";



const About = () => {
  return (
    <Section id="about-us">
      {/* Hero Section */}
      <div className="relative h-[40rem] bg-gradient-to-b from-blue-600 to-purple-700 text-white flex items-center justify-center text-center">
        <div>
          <h1 className="text-6xl font-bold mb-6">About Our Platform</h1>
          <p className="text-2xl max-w-2xl mx-auto">
            Empowering businesses with AI-driven social media marketing solutions.
          </p>
          <button className="mt-6 px-8 py-4 bg-white text-blue-600 rounded-full shadow-md font-semibold hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="container mt-16">
        <Heading
          title="Our Mission and Vision"
          text="Revolutionizing social media marketing with innovative, AI-driven strategies."
        />
        <div className="flex flex-wrap justify-center gap-8">
          {missionPoints.map((point, index) => (
            <MissionCard
              key={index}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
      </div>

      {/* Unique Features Section */}
      <div className="container mt-16">
        <Heading
          title="Why Choose Our Platform?"
          text="Discover what sets us apart in social media marketing."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {uniqueFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="container mt-16">
        <Heading
          title="Meet Our Team"
          text="A team of innovators and marketers driving success."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamPhotos.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              photo={member.photo}
              description={member.description}
            />
          ))}
        </div>
      </div>

      {/* Gradient Footer */}
      <div className="relative mt-16">
        <Gradient />
      </div>
    </Section>

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
    </div>

          <ButtonGradient />

  );
};



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
      </div>

      <ButtonGradient />
      
    </>
  );
};

export default About;
