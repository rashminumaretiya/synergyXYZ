import React, { useState } from "react";
import styles from "./JournyWithUs.module.scss";
import Image from "next/image";
import BgShape from "../../../assets/image/png/bg-shape.png";
import Heading from "../../../shared/Heading";
import SYContainer from "../../../shared/SYContainer";
import SYRow from "../../../shared/SYRow";
import SYCol from "../../../shared/SYCol";
import SYInput from "../../../shared/SYInput";
import SYTextArea from "../../../shared/SYTextArea";
import { contactForm } from "../../../description/contact.descriprion";
import SYButton from "../../../shared/SYButton";
import SYReactSelect from "../../../shared/SYReactSelect";

// Select Style
const customStyles = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: 0,
    "& svg": {
      width: 26,
      height: 26,
    },
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),
  container: (provided, state) => ({
    ...provided,
    padding: "6px 8px",
    border: `1px solid #939598`,
    borderRadius: 8,
  }),
  control: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: "transparent",
    border: 0,
    borderRadius: 0,
    boxShadow: "none",
    "&:hover": {
      borderColor: "#636466",
    },
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "#999a9d",
  }),
  menu: (provided, state) => ({
    ...provided,
    width: "100%",
    left: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#2E31921a"
      : state.isFocused
        ? "#2E319210"
        : "#ffffff",
    color: state.isSelected ? "#2E3192" : "#424143",
    padding: "10px 16px",
    lineHeight: "24px",
    "&:active": {
      backgroundColor: "#2E319230",
    },
  }),
};
const JournyWithUs = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "th", label: "Thailand" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedValue(selectedOption);
  };
  return (
    <div className={styles.journeyWithUsMain}>
      <SYContainer>
        <Heading label="Start Your Journey with Us" className="pb-2" />
        <p className={styles.descriptionText}>
          Fill out the form below, and one of our marketing experts will get
          back to you within 24 hours.
        </p>
        <div className={styles.formWrapper}>
          <form>
            <SYRow className="row-gap-3">
              {contactForm?.map((data, index) => {
                return (
                  <SYCol
                    key={index}
                    xs={12}
                    md={data.textarea ? 12 : 6}
                    className="px-2"
                  >
                    {data.input && <SYInput data={data.input} />}
                    {data.textarea && <SYTextArea data={data.textarea} />}
                    {data.select && (
                      <SYReactSelect
                        label={data?.select?.label}
                        styles={customStyles}
                        value={selectedValue}
                        onChange={handleChange}
                        options={data.select.menu}
                        placeholder={data.placeholder}
                        isSearchable={false}
                      />
                    )}
                  </SYCol>
                );
              })}
              <SYCol xs={12} className="px-2">
                <div className={styles.termConditionMain}>
                  <input type="checkbox" id="t&c" />
                  <label htmlFor="t&c">
                    I agree to the collection and use of my personal data in
                    accordance with the <a>PDPA</a> and the website&apos;s{" "}
                    <a> Terms of Use.</a>
                  </label>
                </div>
              </SYCol>
              <SYCol xs={12} className="px-2">
                <SYButton>Get in Touch</SYButton>
              </SYCol>
            </SYRow>
          </form>
        </div>
      </SYContainer>
    </div>
  );
};

export default JournyWithUs;
