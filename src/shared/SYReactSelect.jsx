import React from "react";
import ReactSelect from "react-select";
import styles from "./SYReactSelect.module.scss";

const SYReactSelect = ({ ...props }) => {
  return (
    <div className={styles.selectMain}>
      <label>{props?.label}</label>
      <ReactSelect {...props} />
    </div>
  );
};

export default SYReactSelect;
