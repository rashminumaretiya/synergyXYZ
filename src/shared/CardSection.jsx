"use client";
import React from "react";
import styles from "./CardSection.module.scss";
import Image from "next/image";

const CardSection = ({ src, label, description }) => {
  return (
    <div className={`${styles.whyChooseBox} text-center`}>
      <div className={styles.imageWrapper}>
        <Image height={180} width={180} src={src} alt={label} />
      </div>
      <h5 className="mt-3">{label}</h5>
      <p className="mt-3">
        {description?.map((item, i) => (
          <>
            <span key={i}>{item.textNormal}</span>
            <span className={styles.boldText}>{item.textBold}</span>
          </>
        ))}
      </p>
    </div>
  );
};

export default CardSection;
