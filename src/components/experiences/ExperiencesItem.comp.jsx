import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const ExperiencesItem = ({ title, subtitle }) => {
  return (
    <article className="experiences__details">
      <BsPatchCheckFill className="icon" />
      <div>
        <h4>{title}</h4>
        <small className="text-light">{subtitle}</small>
      </div>
    </article>
  );
};

export default ExperiencesItem;
