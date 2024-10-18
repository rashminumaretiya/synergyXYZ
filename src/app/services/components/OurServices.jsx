"use client";
import Image from "next/image";
import BgShape from "../../../assets/image/png/bg-shape.png";
import GredientBox from "../../../assets/image/png/gradient-box.png";
import { serviceBox } from "../../../description/services.description";
import Heading from "../../../shared/Heading";
import SYContainer from "../../../shared/SYContainer";
import styles from "./OurServices.module.scss";
import SYRow from "../../../shared/SYRow";
import SYCol from "../../../shared/SYCol";
import SYSwiper from "../../../shared/SYSwiper";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const OurServices = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderServiceBox = (data, index) => (
    <div className={styles.serviceBox} key={index}>
      <Image
        src={GredientBox}
        alt="bg-gredient"
        height="100%"
        width="100%"
        className={styles.gredientImage}
      />
      <div className={styles.content}>
        <div className={styles.headWrap}>
          <span style={{ backgroundColor: data?.bgColor }}></span>
          <h4>{data?.head}</h4>
        </div>
        <p>{data?.description}. </p>
        <Link
          href={data?.link}
          className={`btn d-lg-none ${styles.btnOutline}`}
        >
          <span>Learn more</span>
        </Link>
        <div className={styles.seviceImage}>
          <Image src={data?.src} alt="service" height={250} width={250} />
        </div>
      </div>
      <div className={styles.hoverContent}>
        <h4>{data?.head}</h4>
        <p>{data?.description}. </p>
        <Link href={data?.link} className={`btn ${styles.btnOutline}`}>
          <span>Learn more</span>
        </Link>
      </div>
    </div>
  );

  const renderPaginationBullets = () => {
    return function (index, className) {
      const color = serviceBox[index]?.bgColor || "#ccc"; // Default color if not found
      return `<span class="${className} ${styles.customDot}" style="background-color: ${color};"></span>`;
    };
  };

  return (
    <div className={styles.ourServiceMain}>
      <SYContainer className="position-relative z-1">
        <Heading label="Explore Our Services" />
      </SYContainer>
      <SYContainer className="position-relative z-1">
        <div className={styles.wrapper}>
          {isMobile ? (
            <SYSwiper
              modules={[Pagination]}
              loop={false}
              spaceBetween={20}
              pagination={{
                el: ".custom-swiper-pagination",
                clickable: true,
                renderBullet: renderPaginationBullets(),
              }}
              slidesPerView={1.2}
            >
              {serviceBox.map((data, index) => (
                <SwiperSlide key={index}>
                  {renderServiceBox(data, index)}
                </SwiperSlide>
              ))}
            </SYSwiper>
          ) : (
            <SYRow className="row-gap-4">
              {serviceBox.map((data, index) => (
                <SYCol
                  xs={12}
                  md={6}
                  className={styles.serviceBoxCol}
                  key={index}
                >
                  {renderServiceBox(data, index)}
                </SYCol>
              ))}
            </SYRow>
          )}
        </div>
        <div class="custom-swiper-pagination text-center mt-4"></div>
        <p className={styles.scrollJourneyText}>Scroll to enjoy the journey</p>
      </SYContainer>
    </div>
  );
};

export default OurServices;
