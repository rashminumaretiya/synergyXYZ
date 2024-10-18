"use client";
import React from "react";
import SYContainer from "../../shared/SYContainer";
import Heading from "../../shared/Heading";
import styles from "./Challenges.module.scss";
import { challangeBox } from "../../description/headerFooter.description";
import Image from "next/image";
import SYRow from "../../shared/SYRow";
import SYCol from "../../shared/SYCol";

const Challenges = () => {
  return (
    <div className={styles.challengesMain}>
      <SYContainer>
        <div className={styles.wrapper}>
          <Heading label="Solving your Marketing Challenges" primary={true} />
          <SYRow className={`${styles.challengesWrapper}`}>
            {challangeBox?.map((data, index) => {
              return (
                <SYCol xs={12} sm={6} lg={4} key={index}>
                  <div className={styles.challengeBox}>
                    <Image
                      src={data?.icon}
                      alt={`Challenge ${index + 1}`}
                      height={64}
                      width={64}
                      className={styles.challengeImage}
                    />
                    <h5>{data?.label}</h5>
                  </div>
                </SYCol>
              );
            })}
          </SYRow>
        </div>
      </SYContainer>
    </div>
  );
};

export default Challenges;
