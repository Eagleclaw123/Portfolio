import React from "react";
import "./Skills.css";

const skills = [
  { name: "JavaScript", color: "yellow" },
  { name: "TypeScript", color: "lime" },
  { name: "Python", color: "magenta" },
  { name: "C", color: "blue" },
  { name: "C++", color: "green" },

  { name: "HTML", color: "red" },
  { name: "CSS", color: "teal" },
  { name: "React", color: "cyan" },
  { name: "React Native", color: "violet" },
  { name: "Next.js", color: "salmon" },
  { name: "Redux", color: "navy" },
  { name: "Bootstrap", color: "brown" },
  { name: "Framer Motion", color: "turquoise" },

  { name: "Node.js", color: "orange" },
  { name: "Express.js", color: "violet" },
  { name: "MongoDB", color: "pink" },
  { name: "Redis", color: "navy" },

  { name: "Git", color: "olive" },
  { name: "Linux", color: "darkgreen" },
  { name: "AWS", color: "orange" },
  { name: "Google Cloud", color: "skyblue" },
  { name: "Azure", color: "purple" },
  { name: "Jenkins", color: "brown" },
  { name: "Ansible", color: "gold" },
  { name: "Postman", color: "coral" },

  { name: "Shopify", color: "green" },
  { name: "Liquid", color: "cyan" },
  { name: "Shopify API", color: "teal" },
  { name: "GraphQL", color: "pink" },
  { name: "Webhooks", color: "salmon" },

  { name: "AI Model Integration", color: "magenta" },
  { name: "Prompt Engineering", color: "yellow" },
  { name: "RAG", color: "purple" },
  { name: "Chunking", color: "orange" },
  { name: "Embeddings", color: "lime" },
  { name: "Vector Databases", color: "cyan" },
  { name: "Semantic Search", color: "teal" },
  { name: "LLM Applications", color: "violet" },
  { name: "AI Agents", color: "gold" },
  { name: "Model Evaluation", color: "coral" },
  { name: "Inference APIs", color: "skyblue" },
  // { name: "LLMOps", color: "darkgreen" },
];

const Skills = React.memo(() => {
  return (
    <div className="skills-container">
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <span className={`skill-dot ${skill.color}`}></span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
