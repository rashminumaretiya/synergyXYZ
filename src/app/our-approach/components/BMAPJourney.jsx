"use client";
import amplify from "../../../assets/image/png/amplify.png";
import bubble from "../../../assets/image/png/BMAP-bubble.png";
import create from "../../../assets/image/png/create.png";
import discover from "../../../assets/image/png/discover.png";
import elevate from "../../../assets/image/png/elevate.png";
import optimize from "../../../assets/image/png/optimize.png";
import strategize from "../../../assets/image/png/strategize.png";
import styles from "./BMAPJourney.module.scss";
import CircleJourney from "../../../shared/CircleJourney";

const BMAPJourney = () => {
  const cards = [
    {
      id: 1,
      title: "Discover",
      description:
        "We dive deep into your brand, uncovering  challenges and opportunities that define your journey.",
      img: discover,
      bubbleImage: bubble,
    },
    {
      id: 2,
      title: "Strategize",
      description:
        "Leveraging AI-driven insights, we craft a customized roadmap that aligns with your  objectives and needs.",
      img: strategize,
      bubbleImage: bubble,
    },
    {
      id: 3,
      title: "Create",
      description:
        "Our creative team brings your brand’s vision to life across every channel.",
      img: create,
      bubbleImage: bubble,
    },
    {
      id: 4,
      title: "Amplify",
      description:
        "Your message is deployed for maximum impact through carefully selected platforms.",
      img: amplify,
      bubbleImage: bubble,
    },
    {
      id: 5,
      title: "Optimize",
      description:
        "We continuously monitor and adjust your strategy for evolving market conditions.",
      img: optimize,
      bubbleImage: bubble,
    },
    {
      id: 6,
      title: "Elevate",
      description:
        "As your brand grows, we scale our approach for sustained success.",
      img: elevate,
      bubbleImage: bubble,
    },
  ];

  return (
    <div>
      <CircleJourney list={cards} heading="The BM@P Journey" />
      <p className={styles.scrollText}>Scroll to enjoy the journey</p>
    </div>
  );
};

export default BMAPJourney;
