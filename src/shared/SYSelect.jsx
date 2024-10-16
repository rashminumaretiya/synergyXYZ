import React from "react";
import styles from "./SYSelect.module.scss";

const SYSelect = ({ data }) => {
  return (
    <div className={styles.selectMain}>
      <label htmlFor={data?.id}>{data?.label}</label>
      <select name="" id={data?.id}>
        <option value="" disabled selected>
          {data?.placeholder}
        </option>
        {data?.menu?.map((menu, i) => {
          return (
            <option value="" key={i}>
              {menu}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SYSelect;
