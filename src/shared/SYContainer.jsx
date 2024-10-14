import React from "react";
import { Container } from "react-bootstrap";

const SYContainer = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default SYContainer;
