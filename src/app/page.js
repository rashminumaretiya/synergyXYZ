"use client";
import React from "react";
import HeroSection from "./home/HeroSection";
import CTASection from "./home/CTASection";
import Video from "./home/Video";
import GetnTouch from "./home/GetInTouch";
import OurApproach from "./home/OurApproach";
import Challenges from "./home/Challenges";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CTASection />
      <Video />
      <Challenges />
      <OurApproach />
      <GetnTouch />
    </>
  );
};

export default Home;
