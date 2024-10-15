import React from "react";
import Heading from "../../../shared/Heading";
import SYContainer from "../../../shared/SYContainer";
import SYRow from "../../../shared/SYRow";
import SYCol from "../../../shared/SYCol";
import styles from "./SeamlessStrategy.module.scss";
import visitor from "../../../assets/image/png/visitor.png";
import seamlesssStrategyLine from "../../../assets/image/png/seamless-strategy-line.png";
import Image from "next/image";
import { Table } from "react-bootstrap";

const SeamlessStrategy = () => {
  return (
    <div>
      <SYContainer>
        <SYRow className="justify-content-center text-center">
          <SYCol md={9}>
            <Heading
              className="pb-2"
              primary
              label="10 Core Services 1 Seamless Strategy
Tailored to your Brand's Unique Needs. "
            ></Heading>
            <p className={styles.leads}>
              With BM@P, every facet of your marketing is
              interconnected—allowing for a cohesive, adaptable approach that
              evolves with your brand’s goal.
            </p>
          </SYCol>
        </SYRow>
        <SYRow className="justify-content-center">
          <SYCol md={12}>
            <div className={styles.seamlessStrategyWrapper}>
              {/* <div className={styles.seamlessStrategy}>
                <div className={styles.strategyBox}>
                  <div className={styles.strategyHead}>
                    <Image src={visitor} alt="visitor" />
                    <h5>Visitor</h5>
                  </div>
                  <div className={styles.strategyBody}>
                    <h4>AWARENESS</h4>
                  </div>
                </div>
              </div> */}
              <Table className={styles.seamlessStrategyTable}>
                <thead>
                  <tr>
                    <th>
                      <Image src={visitor} alt="visitor" />
                      Visitor
                    </th>
                    <th>Potential Customer</th>
                    <th>Potential Customer</th>
                    <th>Potential Customer</th>
                    <th>Potential Customer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AWARENESS</td>
                    <td>AWARENESS</td>
                    <td>AWARENESS</td>
                    <td>AWARENESS</td>
                    <td>AWARENESS</td>
                  </tr>
                  {/* <tr>
                    <td colSpan={5}>
                      <Image
                        src={seamlesssStrategyLine}
                        alt="seamlesssStrategyLine"
                        layout="responsive"
                      />
                    </td>
                  </tr> */}
                  <tr>
                    <td>Social Ads</td>
                    <td></td>
                    <td></td>
                    <td>Social Ads</td>
                    <td>Social Ads</td>
                  </tr>
                  <tr>
                    <td>Social Ads</td>
                    <td></td>
                    <td></td>
                    <td>Social Ads</td>
                    <td>Social Ads</td>
                  </tr>
                  <tr>
                    <td>Social Ads</td>
                    <td></td>
                    <td></td>
                    <td>Social Ads</td>
                    <td>Social Ads</td>
                  </tr>
                  <tr>
                    <td>Social Ads</td>
                    <td></td>
                    <td></td>
                    <td>Social Ads</td>
                    <td>Social Ads</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </SYCol>
        </SYRow>
      </SYContainer>
    </div>
  );
};

export default SeamlessStrategy;
