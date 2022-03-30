import React from "react";
import { BiCheck } from "react-icons/bi";

const ServiceListItem = ({ description }) => {
  return (
    <li>
      <BiCheck className="icon" />
      <p>{description}</p>
    </li>
  );
};

export default ServiceListItem;
