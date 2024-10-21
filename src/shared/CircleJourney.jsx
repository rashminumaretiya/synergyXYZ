"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ImageShadow from "../assets/image/png/image-shadow.png";
import styles from "./CircleJourney.module.scss";
import Heading from "./Heading";

const CircleJourney = ({ list, heading }) => {
  const containerRef = useRef(null);
  const [halfScreenWidth, setHalfScreenWidth] = useState(window.innerWidth / 2);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlides, setActiveSlides] = useState([0]); // Keep track of all active slides
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed
  const controls = useAnimation();

  // Dynamically set half screen width on window resize
  useEffect(() => {
    const handleResize = () => {
      setHalfScreenWidth(window.innerWidth / 2);
      setIsMobile(window.innerWidth <= 768); // Set isMobile based on window width
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const centerActiveCard = (index) => {
    const elements = document.querySelectorAll('[id^="journeyStep"]');
    if (elements[index]) {
      const elementOffset = elements[index].offsetLeft;
      const elementWidth = elements[index].clientWidth;
      const centeredPosition =
        elementOffset - halfScreenWidth + elementWidth / 2;
      controls.start({ x: -centeredPosition });
    }
  };

  useEffect(() => {
    centerActiveCard(0);
  }, [list?.length, halfScreenWidth]);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const direction = Math.sign(e.deltaY);
      if (
        (direction === 1 && activeSlide === list.length - 1) ||
        (direction === -1 && activeSlide === 0)
      ) {
        return;
      }

      if (direction === 1) {
        setActiveSlide((prev) => {
          const newActive = prev + 1;
          if (!activeSlides.includes(newActive)) {
            setActiveSlides((prevActive) => [...prevActive, newActive]);
          }
          return newActive;
        });
      } else if (direction === -1) {
        setActiveSlide((prev) => {
          const newActive = prev - 1;
          if (!activeSlides.includes(newActive)) {
            setActiveSlides((prevActive) => [...prevActive, newActive]);
          }
          return newActive;
        });
      }
    };
    const container = containerRef.current;
    if (container && !isMobile) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [activeSlide, list.length, activeSlides, isMobile]);

  useEffect(() => {
    centerActiveCard(activeSlide);
  }, [activeSlide]);

  const handleCardClick = (index) => {
    setActiveSlide(index);
    setActiveSlides((prev) => {
      const newSlides = new Array(index + 1).fill(0).map((_, idx) => idx);
      const uniqueSlides = new Set([...prev, ...newSlides]);
      return Array.from(uniqueSlides);
    });
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
    setActiveSlides((prev) => {
      const newSlides = new Array(index + 1).fill(0).map((_, idx) => idx);
      const uniqueSlides = new Set([...prev, ...newSlides]);
      return Array.from(uniqueSlides);
    });
  };

  // Handle dragging on mobile
  const handleDragEnd = (event, info) => {
    const dragDistance = info.offset.x;
    const threshold = 50; // Set a threshold for how much the user must drag to switch cards
    if (dragDistance > threshold && activeSlide > 0) {
      // Dragging right (to previous card)
      setActiveSlide((prev) => prev - 1);
    } else if (dragDistance < -threshold && activeSlide < list.length - 1) {
      // Dragging left (to next card)
      setActiveSlide((prev) => prev + 1);
    }
  };

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
            const isCurrentlyActive = activeSlide === index;
            const isPreviouslyActive = activeSlides.includes(index);

            const className = isCurrentlyActive
              ? styles.active
              : isPreviouslyActive
                ? styles.activeSlide
                : "";

            return (
              <motion.div
                key={index}
                id={`journeyStep${index}`}
                className={`${styles.slide} ${className}`}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => handleCardClick(index)}
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
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
        {list?.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`${activeSlide === index ? styles.active : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CircleJourney;
