"use client";
import React from "react";
import Heading from "../../../shared/Heading";
import CardSection from "../../../shared/CardSection";
import SYRow from "../../../shared/SYRow";
import SYCol from "../../../shared/SYCol";
import SYContainer from "../../../shared/SYContainer";
import whyChoose from "../../../assets/image/png/why-choose-1.png";
import creativeContent from "../../../assets/image/png/creative-content.png";
import whyChoose4 from "../../../assets/image/png/why-choose-4.png";
import collaborative from "../../../assets/image/png/collaborative.png";
import styles from "./BMAPFramework.module.scss";

const whyChooseBox = [
  {
    src: whyChoose,
    label: "Fluid & Flexible",
    description: [
      {
        textNormal: "Enter at any stage of your marketing journey with",
        textBold: "tailored strategies",
      },
      {
        textNormal: "to ensure your brand evolves with",
        textBold: "ease and agility, encompassing various type of marketing.",
      },
    ],
  },
  {
    src: creativeContent,
    label: "Consumer-Centric",
    description: [
      {
        textNormal: "Every interaction is",
        textBold: "guided by data insights",
      },
      {
        textNormal:
          "into the customer journey, keeping your audience at the centre of every decision.",
      },
    ],
  },
  {
    src: whyChoose4,
    label: "Integrated & Holistic",
    description: [
      {
        textNormal:
          "Seamless coordination between branding, content, media, and more, eliminating silos, creating campaigns that resonate and",
        textBold: "deliver impact across all type of marketing.",
      },
    ],
  },
  {
    src: collaborative,
    label: "Collaborative",
    description: [
      {
        textNormal: "We work alongside you, refining our creative marketing",
        textBold: "approach in real-time to ensure sustained success",
      },
      {
        textNormal: "through transparent and clear communication.",
      },
    ],
  },
];

const BMAPFramework = () => {
  return (
    <div className={styles.frameworkSection}>
      <Heading label={<>The BM@P Framework is</>} />
      <SYContainer>
        <SYRow className="row-gap-4">
          {whyChooseBox.map((data, index) => (
            <SYCol className="col-12 col-md-6 col-xl-3" key={index}>
              <CardSection
                src={data?.src}
                label={data?.label}
                description={data?.description}
              />
            </SYCol>
          ))}
        </SYRow>
      </SYContainer>
    </div>
  );
};

export default BMAPFramework;
