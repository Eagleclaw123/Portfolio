import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "../AnimationContext"; // Use the hook

const AnimatedLine = ({
  turns = 5,
  lineLengths = [50],
  directions = [1],
  strokeWidth = 4,
  segmentLength = 80,
  animationSpeed = 2,
  descriptionInterval = 3, // new prop to match the description interval
}) => {
  const gradientId = "lineGradient";
  const { startLineAnimation } = useAnimation(); // Access animation trigger

  const generatePath = () => {
    let path = "M0 0";
    let x = 0;
    let y = 0;

    for (let i = 0; i < turns; i++) {
      const length = lineLengths[i % lineLengths.length];
      const direction = directions[i % directions.length];

      x += length * direction;
      path += ` L${x} ${y}`;
      y -= length;
      path += ` L${x} ${y}`;
    }
    return path;
  };

  const calculateTotalLength = () =>
    (lineLengths.reduce((total, length) => total + 2 * length, 0) * turns) /
    lineLengths.length;

  const totalLength = calculateTotalLength();

  return (
    <motion.svg
      width="100%"
      height="300"
      viewBox={`-${
        totalLength / 2
      } -${totalLength} ${totalLength} ${totalLength}`}
      style={{
        backgroundColor: "#030304",
        position: "absolute",
        height: "100vh",
      }}
    >
      {startLineAnimation && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#81d3ff" />
            <stop offset="100%" stopColor="#ff3eff" />
          </linearGradient>
        </defs>
      )}
      <motion.path
        d={generatePath()}
        fill="transparent"
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={`${segmentLength} ${totalLength}`}
        strokeDashoffset={0}
        animate={{
          strokeDashoffset: startLineAnimation ? [-totalLength, 0] : 0, // Animate when context changes
        }}
        transition={{
          duration: descriptionInterval, // Match animation speed to description interval
          repeat: Infinity,
          ease: "circOut",
        }}
      />
    </motion.svg>
  );
};

export default AnimatedLine;
