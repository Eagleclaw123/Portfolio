import React from "react";
import "./SkillsContainer.css";
import Skills from "./Skills";
import RotatingSphere from "./RotatingSphere.jsx";

const SkillsContainer = () => {
  return (
    <div className="maincontainer">
      <div className="container container-skills">
        <h1>Skills</h1>
        <Skills />
      </div>
      <div className="container">
        <RotatingSphere />
      </div>
    </div>
  );
};

export default SkillsContainer;
