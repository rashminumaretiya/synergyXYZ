"use client";
import React from "react";
import BgShape from "../../assets/image/png/bg-shape.png";
import Image from "next/image";
import Image1 from "../../assets/image/png/why-choose-1.png";
import Image2 from "../../assets/image/png/why-choose-2.png";
import Image3 from "../../assets/image/png/why-choose-3.png";
import Image4 from "../../assets/image/png/why-choose-4.png";
import styles from "./CTASection.module.scss";
import { CurvyLine } from "../../shared/icon";
import SYContainer from "../../shared/SYContainer";
import SYButton from "../../shared/SYButton";
import Heading from "../../shared/Heading";
import LineHead from "../../shared/LineHead";

const whyChooseBox = [
  {
    src: Image1,
    label: "Fluid Strategies",
    description: "Our adaptive BM@P framework evolves with your brand's needs",
  },
  {
    src: Image2,
    label: "Al-Enhanced Creativity",
    description:
      "Harness the power of artificial intelligence to supercharge your campaigns",
  },
  {
    src: Image3,
    label: "Sustainable Growth",
    description: "We focus on long-term success, not just quick wins",
  },
  {
    src: Image4,
    label: "Integrated Solutions",
    description: "Seamless coordination across all marketing efforts",
  },
];

const CTASection = () => {
  return (
    <div className={styles.CTASectionMain}>
      <Image
        src={BgShape}
        alt="Bg shape"
        className="w-100 position-relative z-1"
        width="100%"
        height="auto"
      />
      <SYContainer className="position-relative z-2">
        <LineHead
          white={true}
          description="As an AI-powered marketing agency based in in Malaysia, we combine creative 
innovation with the latest technology to help your brand thrive. Our conventional and digital marketing services keep your business ahead of the curve."
        />
        <div
          className={`d-lg-flex align-items-center justify-content-between mx-3 ${styles.boxMain}`}
        >
          <div className={styles.singleBox}>
            <h2>22+</h2>
            <p className="fs-5">Industries Reached in Malaysia</p>
          </div>
          <div className={styles.singleBox}>
            <h2>140+</h2>
            <p className="fs-5">Companies Trusted us since Working with Us</p>
          </div>
          <div className={styles.singleBox}>
            <h2>10</h2>
            <p className="fs-5">Years of Marketing Experience</p>
          </div>
        </div>
        <div>
          <Heading
            label={
              <>
                Why Choose Synergy XYZ
                <br className="d-none d-lg-block" /> as your Brand & Marketing
                Partner?
              </>
            }
          />
          <div className="row row-gap-4">
            {whyChooseBox.map((data, index) => (
              <div className="col-12 col-md-6 col-xl-3" key={index}>
                <div className={`${styles.whyChooseBox} text-center`}>
                  <div className={styles.imageWrapper}>
                    <Image
                      height={180}
                      width={180}
                      src={data?.src}
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                  <h5 className="mt-3">{data?.label}</h5>
                  <p className="mt-3">{data?.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 pt-3">
            <SYButton variant="white">Find out more about us</SYButton>
          </div>
        </div>
      </SYContainer>
    </div>
  );
};

export default CTASection;
