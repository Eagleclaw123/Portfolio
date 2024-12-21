import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const descriptions = [
  "I am a FullStack web and app developer",
  "Creating beautiful web experiences.",
  "Loves to code and learn new things.",
  "DevOps Specialist | Process Optimizer",
];

const HeroSection = ({ onSpineLoaded }) => {
  const [currentDescription, setCurrentDescription] = useState(0);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  function loadHandler() {
    setIsSplineLoaded(true);
    console.log("loaded");
    onSpineLoaded();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription(
        (prevIndex) => (prevIndex + 1) % descriptions.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Manideep G
          </motion.h1>
          <motion.p
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            key={currentDescription}
          >
            {descriptions[currentDescription]}
          </motion.p>
        </motion.div>
        <div className="hero-image">
          <div className="mask"></div>
          <Spline
            scene="https://prod.spline.design/1yiHPJNOb5qd-Oca/scene.splinecode"
            onLoad={loadHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
