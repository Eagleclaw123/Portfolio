import React from "react";
import "./SkillsContainer.css";
import Skills from "./Skills";
import RotatingSphere from "./rotatingSphere";

const SkillsContainer = () => {
  return (
    <div className="maincontainer">
      <div className="container container-skills">
        <h1>Skills</h1>
        <Skills></Skills>
      </div>
      <div className="container">
        <RotatingSphere />
      </div>
    </div>
  );
};

export default SkillsContainer;
