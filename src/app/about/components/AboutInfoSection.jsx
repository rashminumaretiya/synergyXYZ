"use client";
import React from "react";
import Video from "../../home/Video";
import BgShape from "../../../assets/image/png/bg-shape.png";
import Image from "next/image";
import styles from "./AboutInfoSection.module.scss";
import OurMission from "./OurMission";
import HeartSection from "./HeartSection";
import MakeUsDifferent from "./MakeUsDifferent";

const AboutInfoSection = () => {
  return (
    <div className={styles.aboutInfoMain}>
      <Image
        src={BgShape}
        alt="Bg shape"
        className="w-100 position-relative z-1"
        width="100%"
        height="auto"
      />
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
