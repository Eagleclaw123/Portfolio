import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
import mobileSvg from "./assets/icons/mobile.svg";
import desktopSvg from "./assets/icons/desktop.svg";
import cloudSvg from "./assets/icons/cloud.svg";
import GradientCanvas from "./components/GradientCanvas";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <GradientCanvas />
      <div className="sections">
        <Section
          svgPath={desktopSvg}
          title="Web Developer"
          description="A full stack web developer experienced in building and maintaining both front-end and back-end of web applications, ensuring seamless functionality and user experience"
        />
        <Section
          svgPath={cloudSvg}
          title="Cloud and DevOps Specialist"
          description="A beginner in Cloud and DevOps, focused on learning cloud infrastructure management, automation, and continuous integration to support efficient software deployment and operations."
        />
        <Section
          svgPath={mobileSvg}
          title="Mobile Developer"
          description="A mobile developer experienced in building and maintaining applications for iOS and Android, focusing on delivering high-performance, user-friendly mobile experiences."
        />
      </div>
    </div>
  );
}

export default App;
