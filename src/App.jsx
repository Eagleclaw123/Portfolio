import React from "react";
import "./App.css";

import HeroSection from "./components/HeroSection.jsx";
import Section from "./components/Section.jsx";
import GradientCanvas from "./components/GradientCanvas.jsx";
import cloudSvg from "./assets/icons/cloud.svg";
import mobileSvg from "./assets/icons/mobile.svg";
import desktopSvg from "./assets/icons/desktop.svg";
import AnimatedLine from "./components/AnimatedLine.jsx";
import SkillsContainer from "./components/SkillsContainer.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  function handleLoad() {}
  return (
    <div className="App">
      <HeroSection onSpineLoaded={handleLoad} />
      <div className="sections">
        <Section
          svgPath={desktopSvg}
          title="Web Developer"
          description="A full stack web developer experienced in building both front-end and back-end of web applications, ensuring seamless functionality and user experience"
        />
        <Section
          svgPath={cloudSvg}
          title="Cloud and DevOps"
          description="A Cloud and DevOps professional with hands-on experience in cloud platforms, automation, and continuous integration for efficient software deployment."
        />
        <Section
          svgPath={mobileSvg}
          title="Mobile Developer"
          description="A mobile developer experienced in building and maintaining applications for iOS and Android, focusing on delivering high-performance, user-friendly mobile experiences."
        />
      </div>
      <SkillsContainer />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
