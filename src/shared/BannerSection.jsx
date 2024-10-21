import React from "react";
import styles from "./BannerSection.module.scss";
import SYContainer from "./SYContainer";

const BannerSection = ({ ...props }) => {
  return (
    <div
      className={styles.heroMain}
      style={{ backgroundImage: `url('${props.image}')` }}
    >
      <div className={styles.linearOverlay}></div>
      <SYContainer className="h-100 position-relative z-1">
        <div
          className={`d-flex flex-column h-100 justify-content-end ${styles.heroHeadingWrapper}`}
        >
          <span>{props.subHead}</span>
          <h2 dangerouslySetInnerHTML={{ __html: props.heading }} />
        </div>
      </SYContainer>
    </div>
  );
};

export default BannerSection;
