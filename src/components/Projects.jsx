import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "CampusFlow – Smart Campus Management Application",
    description:
      "I built a full-stack campus management app used by 1,500+ students and staff to streamline academic and administrative tasks. The mobile frontend was developed in React Native, with a Node.js backend using MongoDB and Mongoose. The backend ran in Docker containers behind an Nginx load balancer on an on-premise Ubuntu 24.04 server. I implemented Jenkins CI/CD for zero-downtime deployments and secured traffic via Cloudflare Tunnel with custom DNS routing",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Docker",
      "Nginx",
      "Jenkins CI/CD",
    ],
    image: "/assets/campusflowapp.jpeg", // Replace with your image path
    backgroundImage: "/assets/bg1.png",
    github: "https://github.com/Eagleclaw123/CampusFlow", // GitHub link
  },
  {
    title: "ReStore",
    description:
      "I developed a Python-based tool that restores design elements in PDFs and images by removing text seamlessly. The tool uses a deep learning model, with EasyOCR achieving 95% accuracy in text detection. For inpainting, LaMa ensures a 92% accuracy in restoring the design, preserving the original layout and details.",
    technologies: [
      "Python",
      "OpenCV",
      "LaMa (Large Mask Inpainting)",
      "EasyOCR",
      "pdf2image",
      "Deep Learning",
      "Computer Vision",
      "Image Restoration",
    ],
    image: "/assets/img6.png", // Replace with your image path
    backgroundImage: "/assets/bg3.jpg",
    github: "https://github.com/Eagleclaw123/ReStore", // GitHub link
  },
  {
    title: "CampusFlow AI – Agentic Query Assistant",
    description:
      "I built an AI-powered agentic backend that lets college staff and students query a live MongoDB database using plain English. The FastAPI service uses a RAG pipeline (ChromaDB + sentence-transformers) to retrieve relevant Mongoose schemas, then passes them to an LLM to generate and self-correct MongoDB queries in a retry loop. It integrates with the existing Node.js backend via role-based access control and supports multi-turn conversational sessions stored in MongoDB.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "MongoDB",
      "OpenAI API",
      "RAG",
      "Node.js",
    ],
    image: "/assets/aichatbot.png",
    backgroundImage: "/assets/bg1.png",
    github: "https://github.com/Eagleclaw123/CampusFlow-Backend",
  },
  {
    title: "ShuttleSync – Badminton Tournament Management App",
    description:
      "Developed a full-stack badminton tournament platform for live scoring, map-based discovery, and shuttle services targeting players, organizers, and sports shops. Built React Native mobile frontend with Node.js/MongoDB backend using Mongoose and Socket.io for real-time scoring and match updates. Deployed backend in Docker containers behind Nginx load balancer on AWS EC2, with Jenkins CI/CD for zero-downtime deployments and high availability.",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Docker",
      "Nginx",
      "Jenkins CI/CD",
      "Socket.io",
    ],
    image: "/assets/shuttlesync.jpeg", // Replace with your image path
    backgroundImage: "/assets/bg1.png",
    github: null, // GitHub link
  },
  {
    title: "Event Scraping Microservice",
    description:
      "I built a Python-based microservice for intelligent event scraping with automatic pagination detection and AI-powered data extraction using Google Gemini 3.0 Flash. The service uses Crawl4AI and Playwright for async crawling, supports 6 pagination strategies (URL params, path-based, next button, load more, infinite scroll), and integrates OpenStreetMap geocoding for venue coordinates. It exposes a FastAPI REST endpoint consumed by a Node.js backend with date range filtering and category-based extraction.",
    technologies: [
      "Python",
      "FastAPI",
      "Crawl4AI",
      "Playwright",
      "Google Gemini",
      "Uvicorn",
      "OpenStreetMap",
      "Node.js",
    ],
    image: "/assets/scraper.png",
    backgroundImage: "/assets/bg3.jpg",
    github: null,
  },

  {
    title: "Smart Home Automation",
    description:
      "Developed an IoT-based smart bulb that can be controlled remotely via a smartphone over Wi-Fi. The system allows users to turn the bulb on/off, adjust brightness, and customize settings through a mobile app, enhancing home convenience and energy efficiency.",
    technologies: [
      "Python",
      "NodeMCU",
      "Rasberry PI",
      "Aurdino IDE",
      "IOT Sensors",
    ],
    image: "/assets/img5.jpg", // Replace with your image path
    backgroundImage: "/assets/bg4.png",
    github: null, // GitHub link
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div
              className="project-image-wrapper"
              style={{
                backgroundImage: `url(${project.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-details">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
