import React, { Suspense, lazy } from "react";
import "./App.css";
import cloudSvg from "./assets/icons/cloud.svg";
import mobileSvg from "./assets/icons/mobile.svg";
import desktopSvg from "./assets/icons/desktop.svg";
import { AnimationProvider } from "./AnimationContext.jsx";

// Lazy Load Components
import HeroSection from "./components/HeroSection.jsx"; // Eagerly loaded
import Section from "./components/Section.jsx"; // Eagerly loaded
const AnimatedLine = lazy(() => import("./components/AnimatedLine.jsx"));
const SkillsContainer = lazy(() => import("./components/SkillsContainer.jsx"));
import Projects from "./components/Projects.jsx";
const Footer = lazy(() => import("./components/Footer.jsx"));

function App() {
  function handleLoad() {}

  return (
    <AnimationProvider>
      <div className="App">
        {/* Suspense Fallback (Loading...) */}
        <Suspense
          fallback={
            <div className="loading-screen">
              <div className="spinner"></div>
            </div>
          }
        >
          <div className="animated-line-container">
            <AnimatedLine
              turns={4}
              lineLengths={[200, 300, 200, 300, 100]}
              directions={[1, 1, 1, 1, 1]}
              strokeWidth={8}
              segmentLength={50}
              animationSpeed={3}
              restartInterval={3}
            />
          </div>

          {/* Hero Section */}
          <HeroSection onSpineLoaded={handleLoad} />

          {/* Other Sections */}
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
        </Suspense>
      </div>
    </AnimationProvider>
  );
}

export default App;
