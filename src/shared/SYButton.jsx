import React from "react";
import { Button } from "react-bootstrap";
import {
  ButtonArrowPrimary,
  ButtonArrowSecondary,
  ButtonArrowWhite,
} from "./icon";

const SYButton = ({ children, ...rest }) => {
  return (
    <Button {...rest}>
      <span>{children}</span>
      {!rest.hideArrow &&
        (rest.variant === "white" ? (
          <ButtonArrowWhite />
        ) : rest.variant === "secondary" ? (
          <ButtonArrowSecondary />
        ) : (
          <ButtonArrowPrimary />
        ))}
    </Button>
  );
};

export default SYButton;
