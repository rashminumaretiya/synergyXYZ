"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
        lerp: 0.1, // Adjust scroll smoothing
      });

      // Cleanup function to destroy the instance on component unmount
      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return <div ref={scrollRef} data-scroll-container></div>;
};

export default SmoothScroll;
