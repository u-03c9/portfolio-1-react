import React from "react";

import HeaderSocials from "./HeaderSocials.comp";
import HeaderButtons from "./HeaderButtons.comp";

import "./header.styles.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Peter Khalil</h1>
        <h5 className="text-light">Web Developer</h5>
        <HeaderButtons />
        <HeaderSocials />
        <div className="header__profile_pic">
          <img src="/assets/me.png" alt="" />
        </div>

        <a href="#contact" className="header__scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
