import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

import "./nav.styles.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const isActive = (location) => (activeNav === location ? "active" : "");

  return (
    <nav>
      <a href="#" className={isActive("#")} onClick={() => setActiveNav("#")}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={isActive("#about")}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiences"
        className={isActive("#experiences")}
        onClick={() => setActiveNav("#experiences")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={isActive("#services")}
        onClick={() => setActiveNav("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={isActive("#contact")}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
