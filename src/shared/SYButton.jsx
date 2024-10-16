import React from "react";
import { Button } from "react-bootstrap";
import {
  ButtonArrowPrimary,
  ButtonArrowPurple,
  ButtonArrowSecondary,
  ButtonArrowWhite,
} from "./icon";

const SYButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      className={`${rest.hideArrow ? "hide-arrow" : ""} ${rest.className}`}
    >
      <span>{children}</span>
      {!rest.hideArrow &&
        (rest.variant === "white" ? (
          <ButtonArrowWhite />
        ) : rest.variant === "secondary" ? (
          <ButtonArrowSecondary />
        ) : rest.variant === "purple" ? (
          <ButtonArrowPurple />
        ) : (
          <ButtonArrowPrimary />
        ))}
    </Button>
  );
};

export default SYButton;
