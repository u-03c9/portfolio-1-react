import React from "react";

function ServiceItem({ title, children }) {
  return (
    <article className="service">
      <div className="service__head">
        <h3>{title}</h3>
      </div>
      <ul className="service__list">{children}</ul>
    </article>
  );
}

export default ServiceItem;
