"use client";

import Image from "next/image";
import SYContainer from "../../shared/SYContainer";
import SYRow from "../../shared/SYRow";
import SYCol from "../../shared/SYCol";
import bannerImage from "../../assets/image/png/banner.gif";
import styles from "./HeroSection.module.scss";
import { CurvyLine } from "../../shared/icon";

const HeroSection = () => {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerImage}>
        <Image src={bannerImage} alt="bannerImage" />
      </div>
      <div className={styles.bannerContent}>
        <SYContainer>
          <SYRow className="justify-content-center">
            <SYCol xs={12}>
              <h2>
                <span>Where AI Meets</span>
                CREATIVITY & IMAGINATION
              </h2>
              <CurvyLine />
              <h5>Creativity, Innovation, Results.</h5>
            </SYCol>
          </SYRow>
        </SYContainer>
      </div>
    </div>
  );
};

export default HeroSection;
