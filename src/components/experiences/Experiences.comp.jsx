import React from "react";

import "./experiences.styles.css";
import ExperiencesItem from "./ExperiencesItem.comp";

const Experiences = () => {
  return (
    <section id="experiences">
      <h5>The Skills I Have</h5>
      <h2>My Experiences</h2>
      <div className="container experiences__cards">
        <div className="experiences__card">
          <h3>Frontend Development</h3>
          <div className="experiences__content">
            <ExperiencesItem title="HTML" subtitle="Experienced" />
            <ExperiencesItem title="CSS" subtitle="Intermediate" />
            <ExperiencesItem title="Javascript" subtitle="Experienced" />
            <ExperiencesItem title="Bootstrap" subtitle="Experienced" />
            <ExperiencesItem title="Tailwind" subtitle="Experienced" />
            <ExperiencesItem title="Vue" subtitle="Intermediate" />
            <ExperiencesItem title="React" subtitle="Intermediate" />
          </div>
        </div>
        <div className="experiences__card">
          <h3>Backend Development</h3>
          <div className="experiences__content">
            <ExperiencesItem title="MongoDB" subtitle="Experienced" />
            <ExperiencesItem title="Go" subtitle="Intermediate" />
            <ExperiencesItem title="Postgresql" subtitle="Experienced" />
            <ExperiencesItem title="Python" subtitle="Experienced" />
            <ExperiencesItem title="Rust" subtitle="Experienced" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
