import React from "react";
import "./Section.css";

const Section = ({ svgPath, title, description }) => {
  const isInlinePath = svgPath.startsWith("M") || svgPath.startsWith("L");

  return (
    <div className="section">
      <div className="svg-container">
        {isInlinePath ? (
          <svg viewBox="0 0 24 24">
            <path d={svgPath} />
          </svg>
        ) : (
          <img src={svgPath} alt={title} />
        )}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Section;
