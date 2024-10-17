import React from "react";
import { CurvyLine } from "./icon";

const LineHead = ({ white, description }) => {
  return (
    <div className="lineHead">
      <CurvyLine />
      <h5
        className={`d-inline ${white ? "white" : ""}`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default LineHead;
