import React from "react";
import { Row } from "react-bootstrap";

const SYRow = ({ children, ...rest }) => {
  return <Row {...rest}>{children}</Row>;
};

export default SYRow;
