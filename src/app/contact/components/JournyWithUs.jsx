import React from "react";
import styles from "./JournyWithUs.module.scss";
import Image from "next/image";
import BgShape from "../../../assets/image/png/bg-shape.png";
import Heading from "../../../shared/Heading";
import SYContainer from "../../../shared/SYContainer";
import SYRow from "../../../shared/SYRow";
import SYCol from "../../../shared/SYCol";
import SYInput from "../../../shared/SYInput";
import SYTextArea from "../../../shared/SYTextArea";
import SYSelect from "../../../shared/SYSelect";
import { contactForm } from "../../../description/contact.descriprion";
import SYButton from "../../../shared/SYButton";

const JournyWithUs = () => {
  return (
    <div className={styles.journyWithUsMain}>
      <Image
        src={BgShape}
        alt="Bg shape"
        className="w-100 position-relative z-1"
        width="100%"
        height="auto"
      />
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
                    {data.select && <SYSelect data={data.select} />}
                  </SYCol>
                );
              })}
              <SYCol xs={12} className="px-2">
                <div className={styles.termConditionMain}>
                  <input type="checkbox" id="t&c" />
                  <label htmlFor="t&c">
                    I agree to the collection and use of my personal data in
                    accordance with the <a>PDPA</a> and the website's{" "}
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
