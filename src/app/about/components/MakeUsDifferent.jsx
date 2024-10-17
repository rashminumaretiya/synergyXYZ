"use client";
import { makeDifferentBox } from "../../../description/aboutUs.description";
import Heading from "../../../shared/Heading";
import SYContainer from "../../../shared/SYContainer";
import styles from "./MakeUsDifferent.module.scss";
import SYCol from "../../../shared/SYCol";
import SYRow from "../../../shared/SYRow";
const MakeUsDifferent = () => {
  return (
    <div className={styles.makeUsDifferentMain}>
      <SYContainer>
        <div className={styles.wrapper}>
          <Heading
            className="make-us-heading"
            label="What Makes Us Different"
          />
          <SYRow className="row-gap-md-5 row-gap-4">
            {makeDifferentBox?.map((data, index) => {
              return (
                <SYCol xs={12} md={6} key={index}>
                  <div className={styles.singleBox}>
                    {data?.icon}
                    <div className={styles.content}>
                      <h5>{data?.head}</h5>
                      <p>{data?.description}</p>
                    </div>
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

export default MakeUsDifferent;
