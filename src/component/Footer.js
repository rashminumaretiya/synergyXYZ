"use client";
import React from "react";
import SYContainer from "../shared/SYContainer";
import Image from "next/image";
import Logo from "../assets/image/svg/logo.svg";
import {
  footerList1,
  footerList2,
} from "../description/headerFooter.description";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../shared/icon";

const Footer = () => {
  return (
    <footer>
      <SYContainer>
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-md-4 col-xxl-6 footer-logo-main">
              <a href="#">
                <Image src={Logo} alt="Logo" width={202} height={44} />
              </a>
              <p>© 2024 Synergy XYZ Sdn Bhd. All rights reserved.</p>
            </div>
            <div className="col-md-8 col-xxl-6">
              <div className="row footer-list-main row-gap-2">
                <div className="col-12">
                  <h6>Contact Us</h6>
                </div>
                <div className="col-12 col-sm-6">
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
                </div>
                <div className="col-12 col-sm-6">
                  <ul className="footer-list2">
                    {footerList2?.map((list, listIndex) => {
                      return (
                        <li key={listIndex}>
                          {list?.icon}
                          <p>{list?.label}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-footer">
            <div className="social-icon-wrapper">
              <a href="#" className="social-icon">
                <FacebookIcon />
              </a>
              <a href="#" className="social-icon">
                <LinkedInIcon />
              </a>
              <a href="#" className="social-icon">
                <InstagramIcon />
              </a>
            </div>
            <div className="privacy-policy-wrapper">
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
