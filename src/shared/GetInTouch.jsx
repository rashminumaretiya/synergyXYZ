import React from "react";
import SYContainer from "./SYContainer";
import styles from "./GetInTouch.module.scss";
import Image from "next/image";
import Logo from "../assets/image/svg/white-logo.svg";
import Shape1 from "../assets/image/png/git-shape1.png";
import Shape2 from "../assets/image/png/git-shape2.png";
import SYButton from "./SYButton";

const GetInTouch = ({ heading, description, variant }) => {
  return (
    <div>
      <SYContainer>
        <div className={styles.gitMain}>
          <Image
            src={Shape1}
            alt="Bg shape 1"
            height={217}
            width={283}
            className={styles.shape1}
          />
          <Image
            src={Shape2}
            alt="Bg shape 2"
            height={213}
            width={319}
            className={styles.shape2}
          />
          <div className="position-relative z-2">
            <div className="text-center">
              <Image src={Logo} alt="logo icon" height={78} width={71} />
            </div>
            <div className={styles.gitContent}>
              <h2>{heading}</h2>
              {description}
              <div className="d-flex align-items-center gap-4 justify-content-center">
                {variant?.map((data, index) => (
                  <SYButton
                    variant={data?.variant}
                    className="mt-4"
                    key={index}
                  >
                    {data?.name}
                  </SYButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SYContainer>
    </div>
  );
};

export default GetInTouch;
