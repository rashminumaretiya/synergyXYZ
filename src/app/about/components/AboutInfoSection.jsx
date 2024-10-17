"use client";
import React from "react";
import Video from "../../home/Video";
import styles from "./AboutInfoSection.module.scss";
import OurMission from "./OurMission";
import HeartSection from "./HeartSection";
import MakeUsDifferent from "./MakeUsDifferent";

const AboutInfoSection = () => {
  return (
    <div className={styles.aboutInfoMain}>
      <div className={styles.wrapper}>
        <Video className={styles.aboutVideoMain} />
        <OurMission />
        <MakeUsDifferent />
        <HeartSection />
      </div>
    </div>
  );
};

export default AboutInfoSection;
