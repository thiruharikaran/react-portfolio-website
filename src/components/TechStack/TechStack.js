import React from "react";
import "./techstack.css";
import Zoom from "react-reveal/Zoom";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaEthereum,
  FaCloud,
  FaTools,
} from "react-icons/fa";

const techStack = [
  {
    icon: <FaReact />,
    title: "Frontend",
    technologies: [
      "React.js",
      "React Router",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Axios",
      "Context API",
      "Framer Motion",
    ],
  },

  {
    icon: <FaNodeJs />,
    title: "Backend",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access",
      "Cloudinary",
    ],
  },

  {
    icon: <FaDatabase />,
    title: "Database",
    technologies: [
      "MongoDB Atlas",
      "MySQL",
      "CRUD Operations",
      "Database Design",
    ],
  },

  {
    icon: <FaEthereum />,
    title: "Blockchain",
    technologies: [
      "Solidity",
      "Ethereum Sepolia",
      "Web3.js",
      "MetaMask",
      "SHA-256 Hashing",
    ],
  },

  {
    icon: <FaCloud />,
    title: "Cloud & Deployment",
    technologies: [
      "Vercel",
      "Render",
      "Netlify",
      "Cloudinary",
    ],
  },

  {
    icon: <FaTools />,
    title: "Tools",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
];

const TechStack = () => {
  return (
    <section className="container tech-stack-section" id="tech">
      <div className="section_title">
        <h2>Our Tech Stack</h2>

        <span className="line"></span>

        <p className="tech-subtitle">
          We leverage modern technologies to build secure,
          scalable and high-performance software solutions.
        </p>
      </div>

      <div className="row">
        {techStack.map((item, index) => (
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4"
            key={index}
          >
            <Zoom>
              <div className="tech-card">

                <div className="tech-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <div className="tech-list">
                  {item.technologies.map((tech, i) => (
                    <span
                      className="tech-badge"
                      key={i}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </Zoom>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;