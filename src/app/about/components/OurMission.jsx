"use client";
import React from "react";
import SYContainer from "../../../shared/SYContainer";
import styles from "./OurMission.module.scss";
import { missionCard } from "../../../description/aboutUs.description";
import SYRow from "../../../shared/SYRow";
import SYCol from "../../../shared/SYCol";

const OurMission = () => {
  return (
    <div className={styles.OurMissionMain}>
      <SYContainer>
        <SYRow className="justify-content-center">
          <SYCol md={9}>
            {missionCard?.map((data, index) => {
              return (
                <div className={styles.card} key={index}>
                  <h2>{data?.head}</h2>
                  <h5>{data?.description}</h5>
                </div>
              );
            })}
          </SYCol>
        </SYRow>
      </SYContainer>
    </div>
  );
};

export default OurMission;
