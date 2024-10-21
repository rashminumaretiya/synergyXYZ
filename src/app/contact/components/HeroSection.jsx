import React from "react";
import BannerSection from "../../../shared/BannerSection";
import BGImage from "../../../assets/image/png/contact-banner.png";
import LineHead from "../../../shared/LineHead";
import SYContainer from "../../../shared/SYContainer";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <>
      <BannerSection
        image={BGImage.src}
        subHead="GET IN TOUCH —"
        heading={`
            Let's Create Something
            <br /> Extraordinary Together`}
      />
      <div className={styles.lineHeadMain}>
        <SYContainer>
          <LineHead
            description="
                <span>Ready to take your brand to the next level? </span> We're
                excited to hear from you. Whether you have a specific project in
                mind or just want to explore possibilities, our team of experts
                is here to help.
            "
          />
        </SYContainer>
      </div>
    </>
  );
};

export default HeroSection;
