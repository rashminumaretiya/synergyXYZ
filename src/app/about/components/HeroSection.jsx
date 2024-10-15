"use client";
import React from "react";
import SYContainer from "../../../shared/SYContainer";
import BannerSection from "../../../shared/BannerSection";
import styles from "./HroSection.module.scss";
import LineHead from "../../../shared/LineHead";
import Img from "../../../assets/image/png/about-banner.png";

const HeroSection = () => {
  return (
    <>
      <BannerSection
        image={Img.src}
        subHead="SYNERGY XYZ —"
        heading="Innovating the Future of Marketing"
      />
      <SYContainer>
        <div className={styles.lineHeadMain}>
          <LineHead
            description={
              <>
                <span>
                  We're not just another marketing agency—we're your AI-powered
                  creative partner.
                </span>
                We combine cutting-edge AI technology with human creativity to
                deliver innovative strategies and measurable results for your
                brand, keeping you ahead in the ever-evolving market landscape.
              </>
            }
          />
        </div>
      </SYContainer>
    </>
  );
};

export default HeroSection;
