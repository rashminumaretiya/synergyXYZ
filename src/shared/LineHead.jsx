import React from "react";
import { CurvyLine } from "./icon";

const LineHead = ({ white, description }) => {
  return (
    <div className="lineHead">
      <CurvyLine />
      <h5 className={`d-inline ms-3 ${white ? "white" : ""}`}>{description}</h5>
    </div>
  );
};

export default LineHead;
