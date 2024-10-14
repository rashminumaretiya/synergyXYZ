import React from "react";
import { CurvyLine } from "./icon";

const Heading = ({ label, primary, className }) => {
  return (
    <div
      className={`${className} d-flex flex-column align-items-center sub-head ${
        primary ? "primary" : ""
      }`}
    >
      <CurvyLine />
      <h2 className="fw-semibold">{label}</h2>
    </div>
  );
};

export default Heading;
