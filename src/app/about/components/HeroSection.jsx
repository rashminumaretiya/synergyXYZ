"use client"
import React from "react";
import SYContainer from "../../../shared/SYContainer";
import styles from "./HroSection.module.scss";
import LineHead from "../../../shared/LineHead";

const HeroSection = () => {
  return (
    <>
      <div className={styles.heroMain}>
        <SYContainer className="h-100">
          <div className="d-flex flex-column h-100 justify-content-end">
            <span>SYNERGY XYZ —</span>
            <h2>Innovating the Future of Marketing</h2>
          </div>
        </SYContainer>
      </div>
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
