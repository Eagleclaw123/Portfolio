import React from "react";
import "./Skills.css";

const skills = [
  { name: "JavaScript", color: "yellow" },
  { name: "C", color: "blue" },
  { name: "C++", color: "green" },
  { name: "Node.js", color: "orange" },
  { name: "ReactNative", color: "violet" },
  { name: "React", color: "cyan" },
  { name: "MongoDB", color: "pink" },
  { name: "CSS", color: "teal" },
  { name: "HTML", color: "red" },
  { name: "Python", color: "magenta" },
  { name: "TypeScript", color: "lime" },
  { name: "Express.js", color: "violet" },
  { name: "Framer Motion", color: "turquoise" },
  { name: "Ansible", color: "gold" },
  { name: "Next.js", color: "salmon" },
  { name: "Redux", color: "navy" },
  { name: "Bootstrap", color: "brown" },
  { name: "Git", color: "olive" },
  { name: "Postman", color: "coral" },
  { name: "Microsoft Word", color: "skyblue" },
  { name: "Linux", color: "darkgreen" },
  { name: "AWS", color: "orange" },
  { name: "Microsoft Azure", color: "purple" },
  { name: "Jenkins", color: "brown" },
  { name: "Redis", color: "navy" },
];

const Skills = React.memo(() => {
  return (
    <div className="skills-container">
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className={`skill-dot ${skill.color}`}></div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
