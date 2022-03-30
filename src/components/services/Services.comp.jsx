import React from "react";
import ServiceItem from "./ServiceItem.comp";
import ServiceListItem from "./ServiceListItem.comp";

import "./services.styles.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <ServiceItem title="UI/UX design">
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </ServiceItem>
        <ServiceItem title="Web Development">
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </ServiceItem>
        <ServiceItem title="Content Creation">
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <ServiceListItem description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </ServiceItem>
      </div>
    </section>
  );
};

export default Services;
