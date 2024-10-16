import React from "react";
import BMAPFramework from "./BMAPFramework";
import BMAPJourney from "./BMAPJourney";
import styles from "./BMAPFrameworkJourney.module.scss";
import Image from "next/image";
import BgShape from "../../../assets/image/png/bg-shape.png";

const BMAPFrameworkJourney = () => {
  return (
    <div className={styles.BMAPFrameworkJourneyWrapper}>
      <Image
        src={BgShape}
        alt="Bg shape"
        className="w-100 position-relative z-1"
        width="100%"
        height="auto"
      />
      <BMAPFramework />
      <BMAPJourney />
    </div>
  );
};

export default BMAPFrameworkJourney;
