import React, { useState, useRef, useEffect } from "react";
import "./HeroSection.css";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { useAnimation } from "../AnimationContext"; // Use the hook
import cloudSvg from "./../assets/icons/cv.svg";

const descriptions = [
  "I am a FullStack web and app developer",
  "Creating beautiful web experiences.",
  "Loves to code and learn new things.",
  "Aspiring Cloud and DevOps Engineer",
];

const HeroSection = ({ onSpineLoaded }) => {
  const [currentDescription, setCurrentDescription] = useState(0);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [showText, setShowText] = useState(false);
  const loadingRef = useRef(null);
  const { startLineAnimation, setStartLineAnimation } = useAnimation(); // Get the hook

  useEffect(() => {
    if (isSplineLoaded) {
      const interval = setInterval(() => {
        setCurrentDescription(
          (prevIndex) => (prevIndex + 1) % descriptions.length
        );
        setStartLineAnimation(false); // Reset the line animation before starting a new one
        setTimeout(() => {
          setStartLineAnimation(true); // Start the line animation after resetting
        }, 500); // Adjust the delay to match your animation timing
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isSplineLoaded, setStartLineAnimation]);

  function loadHandler() {
    setIsSplineLoaded(true);
    setShowText(true);
    console.log("Spline loaded");
    onSpineLoaded();
  }

  return (
    <div className="hero-section">
      <div className="cv-button-container">
        <a
          href="https://drive.google.com/file/d/1xyvq3jX5HzOTGiaNYw6F9ZXYXXY3IE2u/view"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-button"
        >
          <img src={cloudSvg} alt="CV Icon" className="cv-icon" />
          View CV
          {/* <FaFileDownload className="cv-icon" /> */}
        </a>
      </div>
      <div
        ref={loadingRef}
        className={isSplineLoaded ? "hidden" : "loading-container"}
      >
        <div className="loading">
          <p>Loading...</p>
        </div>
      </div>
      <div className={isSplineLoaded ? "hero-content" : "hero-content hidden"}>
        {showText && (
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
              initial={{ opacity: 0, skewX: -10 }}
              animate={{ opacity: 1, skewX: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              key={currentDescription}
            >
              {descriptions[currentDescription]}
            </motion.p>
          </motion.div>
        )}
        <div
          className={`hero-spline ${
            isSplineLoaded ? "visible" : ""
          } hero-image`}
        >
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
