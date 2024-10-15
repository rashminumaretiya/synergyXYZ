import React from "react";
import SYContainer from "../../../shared/SYContainer";
import styles from "./OurMission.module.scss";
import { missionCard } from "../../../description/aboutUs.description";

const OurMission = () => {
  return (
    <div className={styles.OurMissionMain}>
      <SYContainer>
        <div className={styles.wrapper}>
          {missionCard?.map((data, index) => {
            return (
              <div className={styles.card} key={index}>
                <h2>{data?.head}</h2>
                <h5>{data?.description}</h5>
              </div>
            );
          })}
        </div>
      </SYContainer>
    </div>
  );
};

export default OurMission;
