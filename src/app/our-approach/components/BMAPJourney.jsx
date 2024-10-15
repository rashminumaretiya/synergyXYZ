"use client";
import React, { useEffect, useRef, useState } from "react";
import Heading from "../../../shared/Heading";
import styles from "./BMAPJourney.module.scss";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import bubble from "../../../assets/image/png/BMAP-bubble.png";
import ImageShadow from "../../../assets/image/png/image-shadow.png";
import discover from "../../../assets/image/png/discover.png";
import strategize from "../../../assets/image/png/strategize.png";
import create from "../../../assets/image/png/create.png";
import amplify from "../../../assets/image/png/amplify.png";
import optimize from "../../../assets/image/png/optimize.png";
import elevate from "../../../assets/image/png/elevate.png";
import { JourneySingleLine } from "../../../shared/icon";

const BMAPJourney = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [halfScreenWidth, setHalfScreenWidth] = useState(window.innerWidth / 2);
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide
  const [abc, setAbc] = useState([]); // State to track active slide
  const controls = useAnimation();

  const cards = [
    {
      id: 1,
      title: "Discover",
      description:
        "We dive deep into your brand, uncovering  challenges and opportunities that define your journey.",
      img: discover,
      bubbleImage: bubble,
      multiCard: false,
    },
    {
      id: 2,
      title: "Strategize",
      description:
        "Leveraging AI-driven insights, we craft a customized roadmap that aligns with your  objectives and needs.",
      img: strategize,
      bubbleImage: bubble,
      multiCard: false,
    },
    {
      id: 3,
      title: "Create",
      description:
        "Our creative team brings your brand’s vision to life across every channel.",
      img: create,
      bubbleImage: bubble,
      multiCard: false,
    },
    {
      id: 4,
      title: "Amplify",
      description:
        "Your message is deployed for maximum impact through carefully selected platforms.",
      img: amplify,
      bubbleImage: bubble,
      multiCard: false,
    },
    {
      id: 5,
      title: "Optimize",
      description:
        "We continuously monitor and adjust your strategy for evolving market conditions.",
      img: optimize,
      bubbleImage: bubble,
      multiCard: false,
    },
    {
      id: 6,
      title: "Elevate",
      description:
        "As your brand grows, we scale our approach for sustained success.",
      img: elevate,
      bubbleImage: bubble,
      multiCard: false,
    },
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = Math.sign(e.deltaY) * 100;
      setScrollPosition((prev) => {
        const newPosition = Math.max(
          0,
          Math.min(prev + delta, (cards.length - 1) * 400)
        );
        const newActiveSlide = Math.round(newPosition / 400);

        return newPosition;
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [cards.length]);

  useEffect(() => {
    controls.start({ x: halfScreenWidth - scrollPosition });
  }, [scrollPosition, controls, halfScreenWidth]);

  const handleDotClick = (index) => {
    setActiveSlide(index);
    const newScrollPosition = index * 300;
    setScrollPosition(newScrollPosition);
  };

  const handleCardClick = (index) => {
    setAbc((prev) => [...prev, index]);
    setActiveSlide(index);
    const newScrollPosition = index * 300;
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
  return (
    <div className={styles.BMAPJourneySection}>
      <Heading label="The BM@P Journey"></Heading>
      <div ref={containerRef} className={styles.servicesSlideWrapper}>
        <motion.div
          animate={controls}
          className={styles.slideWrapper}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {cards.map((card, index) => {
            cardNum = card.multiCardSection ? cardNum : cardNum + 1;
            return (
              <motion.div
                key={index}
                className={`${styles.slide} ${
                  abc.includes(index) ? styles.active : ""
                } ${abc.includes(index) && activeSlide !== index ? styles.activeSlide : ""}`}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => handleCardClick(index)}
              >
                <div className={styles.slideInner} key={index}>
                  <div className={styles.bubbleWrapper}>
                    {card.bubbleImage && (
                      <>
                        <Image src={card.bubbleImage} alt="bubble" />
                        <h6>{card.title}</h6>
                      </>
                    )}
                  </div>
                  <div className={styles.serviceInfo}>
                    <div className={styles.serviceInfoInner}>
                      <div className={styles.image}>
                        <Image
                          className={styles.icon}
                          src={card.img}
                          alt={card.img}
                        />
                        <Image
                          className={styles.shadow}
                          src={ImageShadow}
                          alt={card.img}
                        />
                      </div>
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <div className={styles.slideDots}>
        {cards.map((card, index) => {
          return (
            <>
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={` ${activeSlide === index ? styles.active : ""}`}
              />
            </>
          );
        })}
      </div>
      <p className={styles.scrollText}>Scroll to enjoy the journey</p>
    </div>
  );
};

export default BMAPJourney;
