import React, { useEffect, useRef } from "react";
import Gradient from "./gradient";
import "./GradientCanvas.css"; // Adjust the path as necessary

const GradientCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");

    return () => {
      gradient.disconnect();
    };
  }, []);

  return <canvas id="gradient-canvas" ref={canvasRef}></canvas>;
};

export default GradientCanvas;
