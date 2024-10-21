"use client";
import React from "react";
import SYContainer from "../../../shared/SYContainer";
import styles from "./HeroSection.module.scss";
import LineHead from "../../../shared/LineHead";
import BannerSection from "../../../shared/BannerSection";
import Img from "../../../assets/image/png/our-approach-banner.png";

const HeroSection = () => {
  return (
    <>
      <BannerSection
        image={Img.src}
        subHead="OUR APPROACH —"
        heading={` The BM@P Framework: <br />
              Shaping the Future of Marketing, Today.`}
      />
      <SYContainer>
        <div className={styles.lineHeadMain}>
          <LineHead
            description="
                <span>
                  At SynergyXYZ, we’ve crafted BM@P (Brand Marketing at Play) as
                  an adaptable creative marketing framework
                </span>
                that evolves with your brand’s journey, connects you with your
                audience and deliver results that matter.
              "
          />
        </div>
      </SYContainer>
    </>
  );
};

export default HeroSection;
