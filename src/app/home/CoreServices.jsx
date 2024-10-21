"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import branding from "../../assets/image/png/branding.png";
import bubbleShape2 from "../../assets/image/png/bubble-shape2.png";
import bubbleShape3 from "../../assets/image/png/bubble-shape3.png";
import bubbleShape4 from "../../assets/image/png/bubble-shape4.png";
import bubble from "../../assets/image/png/bubble.png";
import commerceEcommerce from "../../assets/image/png/commerce-e-commerce.png";
import contentStrategy from "../../assets/image/png/content-strategy.png";
import creativeContent from "../../assets/image/png/creative-content.png";
import CRM from "../../assets/image/png/CRM.png";
import dataAnalytics from "../../assets/image/png/data-analytics.png";
import eventsActivations from "../../assets/image/png/events-activations.png";
import media from "../../assets/image/png/media.png";
import partnership from "../../assets/image/png/partnership.png";
import technology from "../../assets/image/png/technology.png";
import Heading from "../../shared/Heading";
import { JourneyLine } from "../../shared/icon";
import SYCol from "../../shared/SYCol";
import SYContainer from "../../shared/SYContainer";
import SYRow from "../../shared/SYRow";
import CoreServiceCard from "./CoreServiceCard";
import styles from "./coreServices.module.scss";
import { useWindowSize } from "@/hooks/useWindowSize";

const cards = [
  {
    id: 1,
    title: "Establish your unique identity",
    subHeading: "Branding",
    img: branding,
    bubbleImage: bubble,
    multiCard: false,
    color: "#C40F39",
  },
  {
    id: 2,
    title: "Chart your marketing growth path",
    subHeading: "Content Strategy",
    img: contentStrategy,
    bubbleImage: bubble,
    multiCard: false,
    color: "#06AEEF",
  },
  {
    id: 3,
    title: "Engage your audience",
    subHeading: "Creative Content",
    img: creativeContent,
    bubbleImage: bubble,
    multiCard: false,
    color: "#EC008C",
  },
  {
    id: 4,
    title: "Reach your target audience",
    subHeading: "Media",
    img: media,
    bubbleImage: bubble,
    multiCard: false,
    color: "#9B6C22",
  },
  {
    multiCard: true,
    multiCardSection: [
      {
        id: 5,
        title: "Boost your Sales",
        subHeading: "Commerce & e-commerce",
        img: commerceEcommerce,
        bubbleImage: bubbleShape2,
        color: "#9B6C22",
      },
      {
        id: 6,
        title: "Expand your Influence",
        subHeading: "Partnership",
        img: partnership,
        color: "#9C8C22",
      },
      {
        id: 7,
        title: "Create Memorable Brand Experience",
        subHeading: "Events & Activations",
        img: eventsActivations,
        bubbleImage: bubbleShape3,
        color: "#9B6C22",
      },
    ],
  },
  {
    id: 8,
    title: "Nature Customer Loyalty",
    subHeading: "CRM",
    img: CRM,
    bubbleImage: bubble,
    multiCard: false,
    color: "#FFDE02",
  },
  {
    multiCard: true,
    multiCardSection: [
      {
        id: 9,
        title: "Optimise your Performance",
        subHeading: "Data Analytics",
        img: dataAnalytics,
        bubbleImage: bubbleShape4,
        color: "#9B6C22",
      },
      {
        id: 10,
        title: "Streamline your Sales & Marketing Operations",
        subHeading: "Technology",
        img: technology,
        color: "#9C8C22",
      },
    ],
  },
];

const CoreServices = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [halfScreenWidth, setHalfScreenWidth] = useState(window.innerWidth / 2);
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide
  const [servicesWidth, setServicesWidth] = useState(0);
  const [dragInfo, setDragInfo] = useState();
  const controls = useAnimation();
  const windowSize = useWindowSize();
  const isSmallScreen = windowSize.width <= 1024;

  useLayoutEffect(() => {
    const calculateServicesWidth = () => {
      const elements = document.querySelectorAll('[id^="coreService"]');
      let totalWidth = window.innerWidth > 768 ? 200 : 0;
      for (let i = 0; i < elements.length; i++) {
        totalWidth += elements[i].clientWidth;
      }
      setServicesWidth(totalWidth);
    };

    calculateServicesWidth();
    window.addEventListener("resize", calculateServicesWidth);

    return () => {
      window.removeEventListener("resize", calculateServicesWidth);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = Math.sign(e.deltaY) * 100;
      setScrollPosition((prev) => {
        const newPosition = Math.max(
          0,
          Math.min(prev + delta, servicesWidth - halfScreenWidth / 2)
        );
        const newActiveSlide = Math.round(newPosition / 500);
        setActiveSlide(newActiveSlide);
        return newPosition;
      });
    };

    const container = containerRef.current;
    if (container && !isSmallScreen) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [cards.length, servicesWidth, halfScreenWidth, isSmallScreen]);

  useEffect(() => {
    controls.start({ x: halfScreenWidth - scrollPosition });
  }, [scrollPosition, controls, halfScreenWidth]);

  const calculateYTransform = (index) => {
    const baseYValue = 40;
    const period = 300;
    const offset = 100;
    const yValue =
      Math.sin((scrollPosition + index * period) / 100) * baseYValue;
    return yValue + offset;
  };

  const handleDotClick = (index) => {
    const cardObj = cards[index];
    const multiCardLength = cardObj.multiCardSection?.length;
    const cardLength = cardObj.multiCard
      ? cardObj.multiCardSection?.[Math.ceil(multiCardLength / 2)]?.id
      : cardObj.id;
    setActiveSlide(index);
    const newScrollPosition = cardLength * 300;
    setScrollPosition(newScrollPosition);
  };

  const handleCardClick = (index) => {
    const cardObj = cards[index];
    const multiCardLength = cardObj.multiCardSection?.length;
    const cardLength = cardObj.multiCard
      ? cardObj.multiCardSection?.[Math.ceil(multiCardLength / 2)]?.id
      : cardObj.id;
    setActiveSlide(index);
    const newScrollPosition = cardLength * 300;
    setScrollPosition(newScrollPosition);
  };

  useEffect(() => {
    const handleResize = () => {
      setHalfScreenWidth(window.innerWidth / 2);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let cardNum = 0;
  let customDotCount = 0;

  return (
    <>
      <div className={styles.serviceWrap}>
        <SYContainer className="position-relative z-1">
          <SYRow className="justify-content-center">
            <SYCol md={8} className="text-center">
              <Heading label="Empowering your Journey﻿ at Every Step Through our Core Services" />
            </SYCol>
          </SYRow>
        </SYContainer>
        <div ref={containerRef} className={styles.servicesSlideWrapper}>
          <div className={styles.journeyLine}>
            <JourneyLine />
          </div>
          <motion.div
            animate={controls}
            initial={{ x: 450 }}
            className={styles.slideWrapper}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            drag={isSmallScreen ? "x" : false}
            dragSnapToOrigin={false}
            dragConstraints={{
              left: -(servicesWidth - halfScreenWidth - 450),
              right: halfScreenWidth - scrollPosition,
            }}
            onDrag={(e, info) => {
              setDragInfo(info);
            }}
            dragTransition={{ timeConstant: 400 }}
            onDragTransitionEnd={() => setDragInfo(null)}
          >
            {cards.map((card, index) => {
              cardNum = card.multiCardSection ? cardNum : cardNum + 1;
              return (
                <CoreServiceCard
                  key={index}
                  id={`coreService${index}`}
                  className={`${styles.slide} ${
                    activeSlide === index ? styles.active : ""
                  } ${
                    card?.multiCardSection?.length === 3
                      ? styles.multiCard3
                      : card?.multiCardSection?.length === 2
                        ? styles.multiCard2
                        : ""
                  }`}
                  initial={{ y: calculateYTransform(index) }}
                  animate={{ y: calculateYTransform(index) }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  card={card}
                  cardNum={cardNum}
                  activateSlide={() => setActiveSlide(index)}
                  dragInfo={dragInfo}
                  onClick={() => handleCardClick(index)}
                  isSmallScreen={isSmallScreen}
                />
              );
            })}
          </motion.div>
        </div>
        <div className={styles.slideDots}>
          {cards.map((card, index) => {
            let dotColor = card.multiCard
              ? card.multiCardSection[0]?.color
              : card.color;
            customDotCount = card?.multiCard
              ? customDotCount
              : customDotCount + 1;
            return (
              <>
                {card?.multiCard ? (
                  card?.multiCardSection.map((item, ind) => {
                    customDotCount = customDotCount + 1;
                    return (
                      <button
                        key={ind}
                        onClick={() => handleDotClick(index)}
                        className={` ${
                          activeSlide === index ? styles.active : ""
                        }`}
                        style={{
                          backgroundColor: dotColor,
                        }}
                      />
                    );
                  })
                ) : (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={` ${activeSlide === index ? styles.active : ""}`}
                    style={{
                      backgroundColor: dotColor,
                    }}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoreServices;
