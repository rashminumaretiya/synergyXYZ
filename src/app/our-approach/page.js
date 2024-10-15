import React from "react";
import GetInTouch from "../../shared/GetInTouch";
import HeroSection from "./components/HeroSection";
import SeamlessStrategy from "./components/SeamlessStrategy";
import BMAPJourney from "./components/BMAPJourney";

const OurApproach = () => {
  const buttons = [
    { name: "Get in Touch", variant: "white" },
    { name: "Explore Our Services", variant: "secondary" },
  ];
  return (
    <>
      <HeroSection />
      <SeamlessStrategy />
      <BMAPJourney />
      <GetInTouch
        heading="We're more than just a service provider – we're your partner in growth. "
        description={
          <>
            <p>
              We're excited to embark on this journey with you, leveraging our
              expertise,
              <br /> innovative approach, and cutting-edge technology to take
              your brand to new heights.
            </p>
            <p>Let’s create something extraordinary together.</p>
          </>
        }
        variant={buttons}
      />
    </>
  );
};

export default OurApproach;
