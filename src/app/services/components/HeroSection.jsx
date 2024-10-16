import React from "react";
import BannerSection from "../../../shared/BannerSection";
import BGImage from "../../../assets/image/png/service-bg.png";
import LineHead from "../../../shared/LineHead";
import SYContainer from "../../../shared/SYContainer";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div>
      <BannerSection
        image={BGImage.src}
        subHead="OUR SERVICE —"
        heading="Comprehensive Solutions for Your Brand's Success"
      />
      <div className={styles.lineHeadMain}>
        <SYContainer>
          <LineHead
            description={
              <>
                <span>
                  At SynergyXYZ, we offer a full spectrum of marketing and
                  technology solutions
                </span>{" "}
                designed to elevate your brand, engage your audience, and drive
                measurable results. Our AI-enhanced, data-driven approach
                ensures that each service is tailored to your unique needs and
                goals.
              </>
            }
          />
        </SYContainer>
      </div>
    </div>
  );
};

export default HeroSection;
