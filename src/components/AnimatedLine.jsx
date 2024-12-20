import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function AnimatedLine() {
  const splineRef = useRef(null);

  useEffect(() => {
    const canvas = splineRef.current?.querySelector("canvas");
    if (canvas) {
      canvas.style.cursor = "default"; // or "pointer"
    }
  }, []);

  return (
    <div className="line-scene">
      <div className="mask"></div>
      <Spline
        scene="https://prod.spline.design/jNcbJH5-qpRTxshx/scene.splinecode"
        ref={splineRef}
      />
    </div>
  );
}
