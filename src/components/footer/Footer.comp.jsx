import React from "react";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

import "./footer.styles.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        u03c9
      </a>
      <ul className="permalinks">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank">
          <FiFacebook />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target="_blank">
          <FiTwitter />
        </a>
      </div>

      <div className="footer__copyrights">
        <small>&copy; Just Kidding</small>
      </div>
    </footer>
  );
};

export default Footer;
