import React from "react";
import styles from "./BannerSection.module.scss";
import SYContainer from "./SYContainer";

const BannerSection = ({ ...props }) => {
  return (
    <div
      className={styles.heroMain}
      style={{ backgroundImage: `url('${props.image}')` }}
    >
      <SYContainer className="h-100">
        <div className="d-flex flex-column h-100 justify-content-end">
          <span>{props.subHead}</span>
          <h2>{props.heading}</h2>
        </div>
      </SYContainer>
    </div>
  );
};

export default BannerSection;
