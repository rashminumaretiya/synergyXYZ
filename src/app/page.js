"use client";
import React from "react";
import HeroSection from "./home/HeroSection";
import CTASection from "./home/CTASection";
import CoreServices from "./home/CoreServices";
import Video from "./home/Video";
import GetInTouch from "../shared/GetInTouch";
import OurApproach from "./home/OurApproach";
import Challenges from "./home/Challenges";

const Home = () => {
  const buttons = [{ name: "Get in Touch", variant: "white" }];
  return (
    <>
      <HeroSection />
      <CTASection />
      <Video />
      <CoreServices />
      <Challenges />
      <OurApproach />
      <GetInTouch
        heading="Ready to Transform Your Brand?"
        description={[
          `Let’s collaborate to unlock your brand’s full potential.
            <br /> Contact us today and see how we can tailor our AI business
            solutions to your unique needs.`,
        ]}
        variant={buttons}
      />
    </>
  );
};

export default Home;
