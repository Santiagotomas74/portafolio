// TechStack.jsx
import React from "react";
import "./TechStack.css";
import TechCard from "./TechCard";
import ReactLogo from "./ReactLogo.jsx";

const techStack = [
  { name: "HTML5", logo: "/logos/html5.svg", level: 90 },
  { name: "CSS3", logo: "/logos/css.svg", level: 85 },
  { name: "JavaScript", logo: "/logos/javascript.svg", level: 95 },
  { name: "Node.js", logo: "/logos/node.svg", level: 90 },
  { name: "MySQL", logo: "/logos/mysql.svg", level: 75 },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg", level: 50 },
  { name: "Git", logo: "/logos/github.svg", level: 85 },
  { name: "Python", logo: "/logos/python.png", level: 20 },
  { name: "Vite", logo: "/logos/vite.svg", level: 90 },
  { name: "React", logo: ReactLogo, level: 90 }
];

const TechStack = () => {
  return (
    <section className="techstack-section">
      <h2 className="techstack-title">Tech Stack</h2>
      <div className="techstack-grid">
        {techStack.map((tech) => (
          <TechCard
            key={tech.name}
            logo={tech.logo}
            name={tech.name}
            level={tech.level}
          />
        ))}
      </div>
      
    </section>
  );
};

export default TechStack;
