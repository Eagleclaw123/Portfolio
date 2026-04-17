import React from "react";
import "./SkillsContainer.css";
import Skills from "./Skills";
import RotatingSphere from "./RotatingSphere";

const SkillsContainer = () => {
  return (
    <section className="maincontainer" id="skills">
      <div className="container container-skills">
        <h1>Skills</h1>
        <Skills />
      </div>

      <div className="container container-sphere">
        <RotatingSphere />
      </div>
    </section>
  );
};

export default SkillsContainer;
