"use client";
import Image from "next/image";
import Logo from "../assets/image/svg/logo.svg";
import {
  footerList1,
  footerList2,
} from "../description/headerFooter.description";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../shared/icon";
import SYCol from "../shared/SYCol";
import SYContainer from "../shared/SYContainer";
import SYRow from "../shared/SYRow";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SYContainer>
        <div className={styles.footerWrapper}>
          <SYRow>
            <SYCol md={4} xxl={6} className={styles.footerLogoMain}>
              <a href="#">
                <Image src={Logo} alt="Logo" width={202} height={44} />
              </a>
              <p>© 2024 Synergy XYZ Sdn Bhd. All rights reserved.</p>
            </SYCol>
            <SYCol md={8} xxl={6}>
              <SYRow className={`${styles.footerListMain} row-gap-2`}>
                <SYCol xs={12}>
                  <h6>Contact Us</h6>
                </SYCol>
                <SYCol xs={12} sm={6}>
                  <ul>
                    {footerList1?.map((list, listIndex) => {
                      return (
                        <li key={listIndex}>
                          {list?.icon}
                          <p>{list?.label}</p>
                        </li>
                      );
                    })}
                  </ul>
                </SYCol>
                <SYCol xs={12} sm={6}>
                  <ul className={styles.footerList2}>
                    {footerList2?.map((list, listIndex) => {
                      return (
                        <li key={listIndex}>
                          {list?.icon}
                          <p>{list?.label}</p>
                        </li>
                      );
                    })}
                  </ul>
                </SYCol>
              </SYRow>
            </SYCol>
          </SYRow>
          <div className={styles.lowerFooter}>
            <div className={styles.socialIconWrapper}>
              <a href="#" className={styles.socialIcon}>
                <FacebookIcon />
              </a>
              <a href="#" className={styles.socialIcon}>
                <LinkedInIcon />
              </a>
              <a href="#" className={styles.socialIcon}>
                <InstagramIcon />
              </a>
            </div>
            <div className={styles.privacyPolicyWrapper}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </SYContainer>
    </footer>
  );
};

export default Footer;
