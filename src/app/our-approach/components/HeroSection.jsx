"use client";
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
            <span>OUR APPROACH —</span>
            <h2>
              The BM@P Framework: <br />
              Shaping the Future of Marketing, Today.
            </h2>
          </div>
        </SYContainer>
      </div>
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
