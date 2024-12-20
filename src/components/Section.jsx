import React from "react";
import "./Section.css";

const Section = ({ svgPath, title, description }) => {
  return (
    <div className="section">
      <div className="svg-container">
        <svg viewBox="0 0 24 24">
          <path d={svgPath} />
        </svg>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Section;
