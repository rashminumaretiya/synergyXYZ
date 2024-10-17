import React from "react";
import GetInTouch from "../../shared/GetInTouch";
import HeroSection from "./components/HeroSection";
import SeamlessStrategy from "./components/SeamlessStrategy";
import BMAPFrameworkJourney from "./components/BMAPFrameworkJourney";

const OurApproach = () => {
  const buttons = [
    { name: "Schedule BM@P Consultation", variant: "white" },
    { name: "Explore Our Services", variant: "secondary" },
  ];
  return (
    <>
      <HeroSection />
      <SeamlessStrategy />
      <BMAPFrameworkJourney />
      <GetInTouch
        heading="Experience the SynergyXYZ Difference "
        description={[
          `
              Whether you’re an established enterprise or a rising start-up,
              <br />
              BM@P is built to elevate your brand, pushing boundaries and
              unlocking new heights of success.`,
          `With our diverse team of experts and AI-powered tools, <br />
              we craft strategies that resonate and deliver real, measurable
              growth.
        `,
        ]}
        variant={buttons}
      />
    </>
  );
};

export default OurApproach;
