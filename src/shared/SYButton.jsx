import React from "react";
import { Button } from "react-bootstrap";
import { ButtonArrowPrimary, ButtonArrowWhite } from "./icon";

const SYButton = ({ children, ...rest }) => {
  return (
    <Button {...rest}>
      <span>{children}</span>
      {!rest.hideArrow &&
        (rest.variant === "white" ? (
          <ButtonArrowWhite />
        ) : (
          <ButtonArrowPrimary />
        ))}
    </Button>
  );
};

export default SYButton;
