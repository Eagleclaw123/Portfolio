import React from "react";
import "./App.css";

import HeroSection from "./components/HeroSection.jsx";
import Section from "./components/Section.jsx";
import GradientCanvas from "./components/GradientCanvas.jsx";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <GradientCanvas />
      <div className="sections">
        <Section
          svgPath="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
          title="Section 1"
          description="This is the description for section 1."
        />
        <Section
          svgPath="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          title="Section 2"
          description="This is the description for section 2."
        />
        <Section
          svgPath="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
          title="Section 3"
          description="This is the description for section 3."
        />
      </div>
    </div>
  );
}

export default App;

// import "./App.css";
// import Hero from "../components/Hero";

// export default function App() {
//   return (
//     <>
//       <div className="main">
//         <Hero></Hero>
//         {/* <Spline scene="https://prod.spline.design/1fbYJmS5EOKo0aTd/scene.splinecode" /> */}
//       </div>
//     </>
//   );
// }
