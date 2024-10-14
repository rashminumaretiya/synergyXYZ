import React from "react";
import SYContainer from "../../shared/SYContainer";
import SubHeading from "../../shared/SubHeading";
import styles from "./OurApproach.module.scss";
import SYButton from "../../shared/SYButton";

const OurApproach = () => {
  return (
    <div className={styles.ourApproachMain}>
      <SYContainer>
        <div className={styles.wrapper}>
          <SubHeading label="Our Approach -BM@P" primary={true} />
          <p className={styles.description}>
            Our BM@P (Brand Marketing at Play) framework combines creative
            strategies with AI marketing insights, ensuring your brand marketing
            is always impactful and adaptive to your needs.
          </p>
          <SYButton>Learn More About BM@P</SYButton>
        </div>
      </SYContainer>
    </div>
  );
};

export default OurApproach;
