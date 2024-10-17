import React from "react";
import { CurvyLine, CurvyLineBig } from "./icon";

const Heading = ({ label, primary, className }) => {
  return (
    <div
      className={`${className} d-flex flex-column align-items-center sub-head ${
        primary ? "primary" : ""
      }`}
    >
      <span className="small-curve-line">
        <CurvyLine />
      </span>
      <span className="big-curve-line">
        <CurvyLineBig />
      </span>
      <h2 className="fw-semibold">{label}</h2>
    </div>
  );
};

export default Heading;
