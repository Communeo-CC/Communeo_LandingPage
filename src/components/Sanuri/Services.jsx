import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../../constants";
import {
  Gradient,
} from "./design/Services";

import Generating_cc from "./Generating_cc";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container mt-0 md:mt-[-120px]">
        <Heading
          title="AI-driven solutions for Marketing."
          text="Communeo unlocks the full potential of AI-powered tools to elevate influencer marketing."
          
        />


        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Communeo-AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Communeo-AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
              Communeo uses AI to improve marketing strategies in Sri Lanka.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating_cc className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
