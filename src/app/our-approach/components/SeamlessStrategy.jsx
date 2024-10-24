"use client";
import React from "react";
import Heading from "../../../shared/Heading";
import SYContainer from "../../../shared/SYContainer";
import SYRow from "../../../shared/SYRow";
import SYCol from "../../../shared/SYCol";
import styles from "./SeamlessStrategy.module.scss";
import visitor from "../../../assets/image/png/CRM.png";
import media from "../../../assets/image/png/media.png";
import creativeContent from "../../../assets/image/png/creative-content.png";
import loyalCustomer from "../../../assets/image/png/loyal-customer.png";
import seamlessStrategyHexa from "../../../assets/image/png/seamless-strategy-hexa.png";
// import seamlesssStrategyLine1 from "../../../assets/image/png/seamless-strategy-card-1-line.png";
import seamlesssStrategyLine2 from "../../../assets/image/png/seamless-strategy-card-2-line.png";
import seamlesssStrategyLine3 from "../../../assets/image/png/seamless-strategy-card-3-line.png";
import seamlesssStrategyLine4 from "../../../assets/image/png/seamless-strategy-card-4-line.png";
import seamlesssStrategyLine5 from "../../../assets/image/png/seamless-strategy-card-5-line.png";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SYSwiper from "../../../shared/SYSwiper";
import SYButton from "../../../shared/SYButton";
import {
  SeamlesssStrategyLine1,
  SeamlesssStrategyLine2,
  SeamlesssStrategyLine3,
  SeamlesssStrategyLine4,
  SeamlesssStrategyLine5,
} from "../../../shared/icon";

const seamlessStrategy = [
  {
    headImage: visitor,
    headTitle: "Visitor",
    title: "AWARENESS",
    lineImage: <SeamlesssStrategyLine1 />,
    mapContent: [
      {
        title: ["Social Ads"],
      },
      {
        title: ["Radio TV - Print", "Word of Mouth"],
      },
      {
        title: ["PR", "Email Marketing"],
      },
      {
        title: ["SEO"],
      },
    ],
    strategy: ["Branding", "Content Strategy"],
  },
  {
    headImage: media,
    headTitle: "Potential Customer",
    title: "CONSIDERATION",
    lineImage: <SeamlesssStrategyLine2 />,
    mapContent: [
      {
        title: ["Customer Reviews", "Blog"],
      },
      {
        title: ["Influencer Recommendation", "Case Studies"],
      },
    ],
    strategy: ["Creative Content"],
  },
  {
    headImage: creativeContent,
    headTitle: "Customer",
    title: "CONVERSION",
    lineImage: <SeamlesssStrategyLine3 />,
    mapContent: [
      {
        title: ["Store", "Website"],
      },
    ],
    strategy: ["Commerce & e-commerce", "Partnership", "Events & Activations"],
  },
  {
    headImage: visitor,
    headTitle: "Return Customer",
    title: "LOYALTY",
    lineImage: <SeamlesssStrategyLine4 />,
    mapContent: [
      {
        title: ["Live Support"],
      },
      {
        title: ["Rewards Programs"],
      },
      {
        title: ["Exclusive Offer"],
      },
    ],
    strategy: ["CRM"],
  },
  {
    headImage: loyalCustomer,
    headTitle: "Loyal Customer",
    title: "ADVOCACY",
    lineImage: <SeamlesssStrategyLine5 />,
    mapContent: [
      {
        title: ["Brand Ambassadors"],
      },
      {
        title: ["Customer Testimonials"],
      },
      {
        title: ["Referral Programs", "Online Communities"],
      },
    ],
  },
];

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
        <div className={styles.seamlessStrategy}>
          <SYRow className="justify-content-center">
            <SYCol md={12}>
              <div className={styles.seamlessStrategyWrapper}>
                <SYSwiper
                  slidesPerView={5}
                  modules={[Pagination]}
                  pagination={{
                    el: ".custom-swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                      return `<span class="${className} ${styles.customDot}"></span>`;
                    },
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1.4,
                    },
                    375: {
                      slidesPerView: 1.8,
                    },
                    480: {
                      slidesPerView: 2.3,
                    },
                    575: {
                      slidesPerView: 2.5,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1199: {
                      slidesPerView: 4,
                    },
                    1280: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {seamlessStrategy.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className={styles.seamlessStrategyHead}>
                        <Image src={item.headImage} alt="visitor" />
                        <h6>{item.headTitle}</h6>
                      </div>
                      <h5 className={styles.title}>{item.title}</h5>
                      <div className={styles.mapContent}>
                        {item?.mapContent?.map((content, index) => (
                          <div className={styles.mapBox} key={index}>
                            {content.title.map((item, index) => (
                              <h6 key={index}>{item}</h6>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className={styles.strategyWrapper}>
                        {item?.strategy &&
                          item?.strategy?.map((data, i) => (
                            <div className={styles.strategy} key={i}>
                              <Image src={seamlessStrategyHexa} alt="visitor" />
                              <h6>{data}</h6>
                            </div>
                          ))}
                      </div>
                      <div className={styles.seamlessStrategyLine}>
                        {item.lineImage}
                      </div>
                    </SwiperSlide>
                  ))}
                </SYSwiper>
                <div className={styles.seamlessStrategyBtn}>
                  <SYButton
                    hideArrow
                    variant="gradient"
                    className="w-100 rounded"
                  >
                    Media
                  </SYButton>
                  <SYButton
                    hideArrow
                    variant="gradient"
                    className="w-100 rounded"
                  >
                    Data Analytics
                  </SYButton>
                  <SYButton
                    hideArrow
                    variant="gradient"
                    className="w-100 rounded"
                  >
                    Technology
                  </SYButton>
                </div>
                <div class="custom-swiper-pagination"></div>
              </div>
            </SYCol>
          </SYRow>
        </div>
      </SYContainer>
    </div>
  );
};

export default SeamlessStrategy;
