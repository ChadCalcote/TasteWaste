import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container_title">
        TasteWaste
      </div>
      <div className="footer-container_chad">
        <div className="name">Chad Calcote</div>
        <div className="icons">
          <SocialIcon url="https://github.com/ChadCalcote" />
          <SocialIcon url="https://www.linkedin.com/in/chadcalcote/" />
          <SocialIcon url="mailto:calcote@att.net" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
