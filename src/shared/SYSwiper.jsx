import React from "react";
import { Swiper } from "swiper/react";

const SYSwiper = ({ children, ...rest }) => {
  return <Swiper {...rest}>{children}</Swiper>;
};

export default SYSwiper;
