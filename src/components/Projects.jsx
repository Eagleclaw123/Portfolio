import React from "react";
import "./Projects.css";

const projects = [
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
    github: "https://github.com/your-project-link", // GitHub link
  },
  {
    title: "Delicious Meals",
    description:
      "a full-stack web application that allows users to share and explore recipes. The platform ensures smooth performance and reliable access to recipe data, with real-time updates and efficient backend management. Hosted on AWS EC2, the app leverages PM2 for optimized process handling, offering users a seamless and responsive experience.",
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "SQlite",
      "AWS(EC2)",
      "Framer Motion",
      "Redux",
      "Bootstrap",
      "Git",
      "Postman",
    ],
    image: "/assets/img1.png", // Replace with your image path
    backgroundImage: "/assets/bg2.png",
    github: "https://github.com/your-project-link", // GitHub link
  },

  {
    title: "Student Data Portal",
    description:
      "The portal features an OTP-based login system . Students can access real-time academic data, including grades and attendance, with a built-in GPA calculator and centralized timetable management . This system streamlines academic data access, enhances security, and simplifies the student experience",
    technologies: [
      "JavaScript",
      "Google Sheets API,",
      "Papa Parser",
      "Figma",
      "HTML",
      "CSS",
    ],
    image: "/assets/img4.png", // Replace with your image path
    backgroundImage: "/assets/bg1.png",
    github: "https://github.com/your-project-link", // GitHub link
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
    github: "https://github.com/your-project-link", // GitHub link
  },
  {
    title: "Your Smart Calender ",
    description:
      "I have developed a Dynamic Calendar that allows users to add events throughout the day without time conflicts. It features a responsive design for easy access on any device and includes an intuitive search function to quickly find events for any specific day, making it ideal for efficient scheduling.",
    technologies: ["React.js", "CSS-Modules", "Framer Motion", "Spline"],
    image: "/assets/img3.png", // Replace with your image path
    backgroundImage: "/assets/bg6.jpg",
    github: "https://github.com/your-project-link", // GitHub link
  },
  {
    title: "How Many Tries",
    description:
      "I have created an interactive mobile game where users think of a number, and the system attempts to guess it. The game displays the number of tries it took to guess correctly, providing a fun and engaging experience for players.",
    technologies: ["React Native", "Expo", "Android Studio", "TypeScript"],
    image: "/assets/img2.png", // Replace with your image path
    backgroundImage: "/assets/img10.jpg",
    github: "https://github.com/your-project-link", // GitHub link
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
