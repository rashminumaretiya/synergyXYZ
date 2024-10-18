"use client";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./HeartSection.module.scss";
import { useState } from "react";
import Image from "next/image";
import SynergyHeart from "../../../assets/image/png/synergy-heart.png";
import HeartRing from "../../../assets/image/png/heart-ring.png";
import HeartContentBox from "../../../assets/image/png/heart-content-box.png";
import Heading from "../../../shared/Heading";
import SYContainer from "../../../shared/SYContainer";

const HeartSection = () => {
  const items = [
    {
      title: "SYNthesis",
      description:
        "We unite diverse ideas into powerful and innovative solutions, driving real results for our clients",
    },
    {
      title: "enERgy",
      description:
        "We approach each project with excitement and enthusiasm, driving innovation and sparking creativity.",
    },
    {
      title: "strateGY",
      description:
        "We believe in the power of thoughtful planning and precise execution, ensuring purpose in every action we take.",
    },
  ];

  const wrapCapitalizedLetters = (text) => {
    // Split the text into an array of characters
    return text.split("").map((char, index) => {
      // Check if the character is a capital letter
      if (/[A-Z]/.test(char)) {
        return (
          <span key={index} className="capitalized-letter">
            {char}
          </span>
        );
      }
      // If it's not a capital letter, just return the character
      return char;
    });
  };

  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );

  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  const handleCardClick = (index) => {
    // Determine if the clicked index is to the left or right of the center card
    const centerIndex = indexInArrayScope + 1; // The center card's index
    const newDirection = index < centerIndex ? -1 : 1; // Determine direction based on clicked card

    handleClick(newDirection); // Call handleClick with the determined direction
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      handleClick(-1); // Slide left
    } else if (info.offset.x < -50) {
      handleClick(1); // Slide right
    }
  };

  const variants = {
    enter: ({ direction }) => ({
      x: direction < 1 ? 50 : -50,
      y: 30,
      opacity: 0,
    }),
    center: ({ position, direction }) => ({
      x: 0,
      y: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    }),
    exit: ({ direction }) => ({
      x: direction < 1 ? -50 : 50,
      y: 30,
      opacity: 0,
    }),
  };

  function getZIndex({ position, direction }) {
    const indexes = {
      left: direction > 0 ? 2 : 1,
      center: 3,
      right: direction > 0 ? 1 : 2,
    };
    return indexes[position()];
  }
  const handleDotClick = (index) => {
    const newDirection = index > activeIndex ? 1 : -1;
    setActiveIndex([index, newDirection]);
  };

  return (
    <div className={styles.mainWrapper}>
      <Heading
        className={`pb-2 ${styles.heading}`}
        label="The Heart of SynergyXYZ"
      />
      <p className={styles.descText}>
        Our core values that guide every aspect of our work
      </p>
      <SYContainer className="position-relative">
        <div className={`${styles.heartRing} ${styles.mobileHeartRing}`}>
          <Image src={HeartRing} alt="Heart Ring" layout="responsive" />
        </div>
        <div className={styles.heartWrapper}>
          <div className={styles.heartRing}>
            <Image src={HeartRing} alt="Heart Ring" layout="responsive" />
          </div>
          <div className={styles.synergyHeart}>
            <Image src={SynergyHeart} alt="Heart Ring" />
          </div>
          <div className={styles.heartSlideWrapper}>
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleItems.map((item, index) => (
                <motion.div
                  className={styles.heartItem}
                  key={item.title}
                  layout
                  custom={{
                    direction,
                    position: () => {
                      if (item === visibleItems[0]) {
                        return "left";
                      } else if (item === visibleItems[1]) {
                        return "center";
                      } else {
                        return "right";
                      }
                    },
                  }}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth spring transition
                  onClick={() => handleCardClick(indexInArrayScope + index)} // Handle card click
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.5}
                  onDragEnd={handleDragEnd}
                >
                  <Image src={HeartContentBox} alt="Heart Content Box" />
                  <div className={`${styles.heartContent} desc`}>
                    <h4>{wrapCapitalizedLetters(item.title)}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className={styles.customDots}>
          {items.slice(0, 3).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                indexInArrayScope === index ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <p className={styles.scrollText}>Slide to reveal our heart</p>
      </SYContainer>
    </div>
  );
};

export default HeartSection;
