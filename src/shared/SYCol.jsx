import React from "react";
import { Col } from "react-bootstrap";

const SYCol = ({ children, ...rest }) => {
  return <Col {...rest}>{children}</Col>;
};

export default SYCol;
