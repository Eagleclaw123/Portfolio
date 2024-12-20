import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import Spline from "@splinetool/react-spline";

const descriptions = [
  "A passionate developer.",
  "Creating beautiful web experiences.",
  "Loves to code and learn new things.",
  "Dedicated to building seamless applications.",
];

const HeroSection = () => {
  const [currentDescription, setCurrentDescription] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription(
        (prevIndex) => (prevIndex + 1) % descriptions.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Manideep G</h1>
          <p className="description">{descriptions[currentDescription]}</p>
        </div>
        <div className="hero-image">
          <div className="mask"></div>
          <Spline scene="https://prod.spline.design/1yiHPJNOb5qd-Oca/scene.splinecode" />
          {/* <img src="https://via.placeholder.com/300" alt="Profile" /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// import React from "react";
//

// const Hero = () => {
//   return (
//     <div className="scene">
// };

// export default Hero;
