"use client";
import React from "react";
import SYContainer from "../../shared/SYContainer";
import Heading from "../../shared/Heading";
import styles from "./Challenges.module.scss";
import { challangeBox } from "../../description/headerFooter.description";
import Image from "next/image";

const Challenges = () => {
  return (
    <div className={styles.challengesMain}>
      <SYContainer>
        <div className={styles.wrapper}>
          <Heading label="Solving your Marketing Challenges" primary={true} />
          <div className={`row ${styles.challengesWrapper}`}>
            {challangeBox?.map((data, index) => {
              return (
                <div key={index} className="col-12 col-sm-6 col-md-3 col-xl-4">
                  <div className={styles.challengeBox}>
                    <Image
                      src={data?.icon}
                      alt={`Challenge ${index + 1}`}
                      height={64}
                      width={64}
                    />
                    <h5>{data?.label}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SYContainer>
    </div>
  );
};

export default Challenges;
