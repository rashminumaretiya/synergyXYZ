"use client";
import GetInTouch from "../../shared/GetInTouch";
import AboutInfoSection from "./components/AboutInfoSection";
import HeroSection from "./components/HeroSection";

const About = () => {
  const buttons = [
    { name: "Get in Touch", variant: "white" },
    { name: "Explore Our Services", variant: "secondary" },
  ];
  return (
    <>
      <HeroSection />
      <AboutInfoSection />
      <GetInTouch
        heading="We're more than just a service provider – we're your partner in growth."
        description={[
          `We&apos;re excited to embark on this journey with you, leveraging
              our expertise,
              <br /> innovative approach, and cutting-edge technology to take
              your brand to new heights.`,

          "Let’s create something extraordinary together.",
        ]}
        variant={buttons}
      />
    </>
  );
};

export default About;
