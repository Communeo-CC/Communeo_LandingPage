
import Section from "./Section";
import Heading from "./Heading";
import TagLine from "./TagLine";
import { teamPhoto1, teamPhoto2, teamPhoto3, check } from "../../assets";
import { teamDetails, missionPoints } from "../../constants";
import { Gradient } from "../design/About";
import TeamCard from "./TeamCard";
import MissionCard from "./MissionCard";

const About = () => {
  return (
    <Section id="about-us">
      {/* Hero Section */}
      <div className="relative h-[40rem] bg-gradient-to-b from-blue-500 to-purple-600 text-white flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">About Our Journey</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover how we empower businesses with AI-driven marketing
            solutions.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mt-12">
        <Heading
          title="Our Mission and Vision"
          text="We aim to revolutionize marketing strategies with cutting-edge AI solutions."
        />
        <div className="flex flex-wrap justify-center gap-8">
          {missionPoints.map((point, index) => (
            <MissionCard key={index} title={point.title} description={point.description} />
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="container mt-16">
        <Heading
          title="Meet Our Team"
          text="Our team of experts is dedicated to driving innovation and success."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamDetails.map((member, index) => (
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

      {/* Why Choose Us Section */}
      <div className="relative mt-16">
        <div className="relative z-1 flex items-center h-[30rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <img
              className="w-full h-full object-cover opacity-20"
              alt="Background"
              src={teamPhoto1} // Replace with a relevant background
            />
          </div>
          <div className="relative z-10 max-w-[18rem] ml-auto">
            <h4 className="h4 mb-4">Why Choose Us?</h4>
            <ul className="body-2">
              {["Innovative AI Solutions", "Proven Track Record", "Customer-Centric Approach"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="check-icon" />
                    <p className="ml-4">{item}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <Gradient />
      </div>
    </Section>
  );
};

export default About;
