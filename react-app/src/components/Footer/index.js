import React from "react";
import { SocialIcon } from "react-social-icons";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer-container" role="contentinfo">
      <p className="footer-container_title">TasteWaste</p>
      <div className="footer-container_chad">
        <div className="name">Chad Calcote</div>
        <div className="icons">
          <SocialIcon url="https://github.com/ChadCalcote" />
          <SocialIcon url="https://www.linkedin.com/in/chadcalcote/" />
          <SocialIcon url="mailto:calcote@att.net" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
