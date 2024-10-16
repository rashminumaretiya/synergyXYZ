import React from "react";
import SYContainer from "../../../shared/SYContainer";
import Heading from "../../../shared/Heading";
import styles from "./PoweredBy.module.scss";
import Image from "next/image";
import Image1 from "../../../assets/image/svg/ai-3d.svg";
import Image2 from "../../../assets/image/svg/pie-chart-3d.svg";
import Image3 from "../../../assets/image/svg/integration-icon.svg";
import Image4 from "../../../assets/image/svg/cloud-space.svg";
import Image5 from "../../../assets/image/svg/up-arrows.svg";
import SYRow from "../../../shared/SYRow";
import SYCol from "../../../shared/SYCol";

const PoweredBy = () => {
  const items = [
    { title: "AI-Enhanced Strategies", src: Image1 },
    { title: "Data-Driven Decision Making", src: Image2 },
    { title: "Seamless Integration Across Services", src: Image3 },
    { title: "Adaptive and Flexible Approaches", src: Image4 },
    { title: "Focus on Measurable Results", src: Image5 },
  ];

  const getRows = (items) => {
    const rows = [];
    let startIndex = 0;

    if (items.length % 2 !== 0) {
      // If the number of items is odd, start with a row of 2 items
      rows.push(items.slice(0, 2));
      startIndex = 2;
    }

    // Fill the remaining items in rows of 3
    while (startIndex < items.length) {
      rows.push(items.slice(startIndex, startIndex + 3));
      startIndex += 3;
    }

    return rows;
  };

  const rows = getRows(items);

  return (
    <div className={styles.poweredByMain}>
      <SYContainer>
        <Heading label="Powered by our unique BM@P framework" primary={true} />
        <div className={styles.wrapper}>
          {rows?.map((row, rowIndex) => (
            <SYRow key={rowIndex} className="justify-content-center">
              {row?.map((item, index) => (
                <SYCol key={index} xs={12} sm={6} md={4}>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={item?.src}
                      alt={item?.title}
                      width={64}
                      height={64}
                    />
                    <h5>{item?.title}</h5>
                  </div>
                </SYCol>
              ))}
            </SYRow>
          ))}
        </div>
      </SYContainer>
    </div>
  );
};

export default PoweredBy;
