import { motion, useInView } from "framer-motion";
import styles from "./coreServices.module.scss";
import Image from "next/image";
import shadowActive from "../../assets/image/png/shadow-active.png";
import { useEffect, useRef } from "react";
import { isElementHorizontallyCentered } from "@/utils/dom";

const CoreServiceCard = ({
  card,
  cardNum,
  activateSlide,
  dragInfo,
  isSmallScreen,
  ...props
}) => {
  const ref = useRef();
  const isInView = useInView(ref);

  const handleActivateSlide = () => {
    if (
      isSmallScreen &&
      isInView &&
      isElementHorizontallyCentered(ref.current, 200)
    ) {
      activateSlide();
    }
  };

  useEffect(() => {
    handleActivateSlide();
  }, [isInView, dragInfo]);

  return (
    <motion.div ref={ref} {...props}>
      {!card.multiCard ? (
        <div className={styles.slideInner}>
          <div className={styles.bubbleWrapper}>
            <div className={styles.activeShadow}>
              <Image src={shadowActive} alt="shadowActive" />
            </div>
            {card.bubbleImage && (
              <Image
                src={card.bubbleImage}
                alt="bubble"
                className={styles.bubbleImage}
              />
            )}
            <Image className={styles.icon} src={card.img} alt={card.img} />
          </div>
          <div className={styles.serviceInfo}>
            <h6>
              <span
                className={styles.color}
                style={{ backgroundColor: card.color }}
              ></span>
              <span>{String(cardNum).padStart(2, 0)}</span>
              {card.subHeading}
            </h6>
            <h4>{card.title}</h4>
          </div>
        </div>
      ) : (
        card.multiCardSection && (
          <div className={styles.multiCardWrapper}>
            {card.multiCardSection.map((subCard, index) => {
              cardNum = cardNum + 1;
              return (
                <div className={styles.slideInner} key={index}>
                  <div className={styles.bubbleWrapper}>
                    <div className={styles.activeShadow}>
                      <Image src={shadowActive} alt="shadowActive" />
                    </div>
                    {subCard.bubbleImage && (
                      <Image src={subCard.bubbleImage} alt="bubble" />
                    )}
                    <Image
                      className={styles.icon}
                      src={subCard.img}
                      alt={subCard.img}
                    />
                  </div>
                  <div className={styles.serviceInfo}>
                    <h6>
                      <span
                        className={styles.color}
                        style={{ backgroundColor: subCard.color }}
                      ></span>
                      <span>{String(cardNum).padStart(2, 0)}</span>
                      {subCard.subHeading}
                    </h6>
                    <h4>{subCard.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
    </motion.div>
  );
};

export default CoreServiceCard;
