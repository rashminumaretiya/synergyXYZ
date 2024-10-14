import React from "react";
import SYContainer from "../../shared/SYContainer";
import styles from "./GetInTouch.module.scss";
import Image from "next/image";
import Logo from "../../assets/image/svg/white-logo.svg";
import Shape1 from "../../assets/image/png/git-shape1.png";
import Shape2 from "../../assets/image/png/git-shape2.png";
import SYButton from "../../shared/SYButton";

const GetInTouch = () => {
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
              <h2>Ready to Transform Your Brand?</h2>
              <p className={styles.description}>
                Let’s collaborate to unlock your brand’s full potential.
                <br /> Contact us today and see how we can tailor our AI
                business solutions to your unique needs.
              </p>
              <SYButton variant="white" className="mt-4">
                Get in Touch
              </SYButton>
            </div>
          </div>
        </div>
      </SYContainer>
    </div>
  );
};

export default GetInTouch;
