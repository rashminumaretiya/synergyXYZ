"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ImageShadow from "../assets/image/png/image-shadow.png";
import styles from "./CircleJourney.module.scss";
import Heading from "./Heading";

const CircleJourney = ({ list, heading }) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [halfScreenWidth, setHalfScreenWidth] = useState(window.innerWidth / 2);
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide
  const [abc, setAbc] = useState([]); // State to track active slide
  const [journeyStepsWidth, setJourneyStepsWidth] = useState(0);
  const controls = useAnimation();

  useLayoutEffect(() => {
    const calculateJourneyStepsWidthWidth = () => {
      const elements = document.querySelectorAll('[id^="journeyStep"]');
      let totalWidth = window.innerWidth > 768 ? 200 : 0;
      for (let i = 0; i < elements.length; i++) {
        totalWidth += elements[i].clientWidth;
      }
      setJourneyStepsWidth(totalWidth);
    };

    calculateJourneyStepsWidthWidth();
    window.addEventListener("resize", calculateJourneyStepsWidthWidth);

    return () => {
      window.removeEventListener("resize", calculateJourneyStepsWidthWidth);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = Math.sign(e.deltaY) * 100;
      setScrollPosition((prev) => {
        const newPosition = Math.max(
          0,
          Math.min(prev + delta, journeyStepsWidth - halfScreenWidth / 2)
        );

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
  }, [list.length, journeyStepsWidth, halfScreenWidth]);

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
      <Heading label={heading}></Heading>
      <div ref={containerRef} className={styles.servicesSlideWrapper}>
        <motion.div
          animate={controls}
          className={styles.slideWrapper}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {list?.map((card, index) => {
            cardNum = card.multiCardSection ? cardNum : cardNum + 1;
            return (
              <motion.div
                key={index}
                id={`journeyStep${index}`}
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
                          width={140}
                          height={140}
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
        {list?.map((_, index) => {
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
    </div>
  );
};

export default CircleJourney;