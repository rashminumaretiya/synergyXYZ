"use client";
import ReactLenis from "@studio-freight/react-lenis";

const SmoothScroll = () => {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 0.01, smoothTouch: true }}
    ></ReactLenis>
  );
};

export default SmoothScroll;
