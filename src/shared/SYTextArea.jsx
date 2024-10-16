import React from "react";
import styles from "./SYTextArea.module.scss";

const SYTextArea = ({ data }) => {
  return (
    <div className={styles.textAreaMain}>
      <textarea placeholder={data?.placeholder} rows={11} />
    </div>
  );
};

export default SYTextArea;
