import React from "react";
import styles from "./SYInput.module.scss";

const SYInput = ({ data }) => {
  return (
    <div className={styles.inputBoxMain}>
      <label htmlFor={data?.id}>{data?.label}</label>
      <input type={data?.type} placeholder={data?.placeholder} id={data?.id} />
    </div>
  );
};

export default SYInput;
