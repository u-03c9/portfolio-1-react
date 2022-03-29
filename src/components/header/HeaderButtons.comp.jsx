import React from "react";

function HeaderButtons() {
  return (
    <div className="header__buttons">
      <a href="/assets/cv.pdf" download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default HeaderButtons;
