import Heading from "./Heading";
import Section from "./Section";

const Benefits = () => {
  return (
    <Section id="features" className="block md:hidden"> {/* This will show on mobile and hide on larger screens */}
      <div className="container relative z-2">
        <Heading
          className="mt-10 md:mt-40 lg:mt-10 md:max-w-md lg:max-w-2xl"
          title="Unleash The Power Of Effective Marketing"
        />
      </div>
    </Section>
  );
};

export default Benefits;
