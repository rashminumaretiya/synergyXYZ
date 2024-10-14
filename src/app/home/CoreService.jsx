// import SYSwiper from "@/app/shared/SYSwiper";
// import SubHeading from "@/app/shared/SubHeading";
// import Image from "next/image";
// import { useState } from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Mousewheel, Pagination } from "swiper/modules";
// import { SwiperSlide } from "swiper/react";
// import styles from "./coreService.module.scss";
// import BgShape from "/public/assets/image/png/bg-shape.png";
// import bg from "/public/assets/image/png/bg-shape.png";

// const CoreService = () => {
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   const handleSlideClick = (index) => {
//     if (swiperInstance) {
//       swiperInstance.slideTo(index);
//     }
//   };
//   return (
//     <div className={styles.coreServiceMain}>
//       <Image
//         src={BgShape}
//         alt="Bg shape"
//         className="w-100 position-relative z-1"
//         width="100%"
//         height="auto"
//       />
//       <div className="position-relative z-2">
//         <SubHeading
//           label={
//             <>
//               Empowering your Journey﻿ at
//               <br className="d-none d-lg-block" /> Every Step Through our Core
//               Services
//             </>
//           }
//           primary={true}
//         />
//         <SYSwiper
//           onSwiper={setSwiperInstance}
//           slidesPerView={4}
//           centeredSlides={true}
//           spaceBetween={30}
//           mousewheel={true}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Mousewheel, Pagination]}
//           className={styles.journeySwiper}
//         >
//           <SwiperSlide
//             className={styles.slide}
//             onClick={() => handleSlideClick(0)}
//           >
//             <div>
//               <div>
//                 {/* <Image src={bg} height={100} width={100} alt={`Step`} /> */}
//                 Slide 1
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide
//             className={styles.slide}
//             onClick={() => handleSlideClick(1)}
//           >
//             <div>
//               <div>
//                 {/* <Image src={bg} height={100} width={100} alt={`Step`} /> */}
//                 Slide 1
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide
//             className={styles.slide}
//             onClick={() => handleSlideClick(2)}
//           >
//             <div>
//               <div>
//                 {/* <Image src={bg} height={100} width={100} alt={`Step`} /> */}
//                 Slide 2
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide
//             className={styles.slide}
//             onClick={() => handleSlideClick(3)}
//           >
//             <div>
//               <div>
//                 {/* <Image src={bg} height={100} width={100} alt={`Step`} /> */}
//                 Slide 3
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide
//             className={styles.slide}
//             onClick={() => handleSlideClick(4)}
//           >
//             <div>
//               <div>
//                 {/* <Image src={bg} height={100} width={100} alt={`Step`} /> */}
//                 Slide 4
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide
//             className={styles.slide}
//             onClick={() => handleSlideClick(5)}
//           >
//             <div>
//               <div>
//                 {/* <Image src={bg} height={100} width={100} alt={`Step`} /> */}
//                 Slide 5
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide
//             className={styles.slide}
//             onClick={() => handleSlideClick(6)}
//           >
//             <div>
//               <div>
//                 {/* <Image src={bg} height={100} width={100} alt={`Step`} /> */}
//                 Slide 6
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide
//             className={styles.slide}
//             onClick={() => handleSlideClick(7)}
//           >
//             <div>
//               <div>
//                 {/* <Image src={bg} height={100} width={100} alt={`Step`} /> */}
//                 Slide 7
//               </div>
//             </div>
//           </SwiperSlide>
//         </SYSwiper>
//       </div>
//     </div>
//   );
// };

// export default CoreService;

"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./coreService.module.scss";

export default function WheelTriggeredZigzagAnimation() {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();

  const cards = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
    { id: 4, title: "Card 4" },
    { id: 5, title: "Card 5" },
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = Math.sign(e.deltaY) * 20; // Adjust this value to control scroll speed
      setScrollPosition((prev) => {
        const newPosition = prev + delta;
        return Math.max(0, Math.min(newPosition, 1200)); // Constrain between 0 and 1200
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
  }, []);

  // Use a separate effect to control the animation directly
  useEffect(() => {
    controls.start({ x: -scrollPosition });
  }, [scrollPosition, controls]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "500px",
      }}
    >
      <motion.div
        className={`flex space-x-8 px-4 ${styles.slideWrap}`}
        animate={controls}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {cards.concat(cards).map((card, index) => (
          <motion.div
            key={index}
            className={`flex-shrink-0 w-64 ${styles.singleSlideWrapper}`}
            style={{ maxWidth: "25%", width: "100%" }}
            initial={{ y: 0 }} // Initial position for the animation
            animate={{
              y: index % 2 === 0 ? -scrollPosition / 20 : scrollPosition / 20,
            }} // Adjust y based on scrollPosition
            transition={{ duration: 0, ease: "easeInOut" }} // Transition for smoothness
          >
            <div className="w-64">
              <div className={`p-6 ${styles.slideWraper}`}>
                <h2 className="text-2xl font-bold text-center">{card.title}</h2>
                <p className="mt-2 text-center text-muted-foreground">
                  Scroll to animate
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
