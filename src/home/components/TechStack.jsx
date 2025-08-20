// TechStack.jsx
import React, { useRef, useState, useEffect } from "react";
import "./TechStack.css";
import TechCard from "./TechCard";
import ReactLogo from "./ReactLogo.jsx";
import { motion } from "framer-motion";

const techStack = [
  { name: "React", logo: ReactLogo, level: 90 },
  { name: "Node.js", logo: "/logos/nodejs.svg", level: 90 },
  { name: "Vite", logo: "/logos/vite.svg", level: 90 },
  { name: "Material UI", logo: "/logos/mui.svg", level: 90 },
  { name: "Bootstrap", logo: "/logos/bst.svg", level: 85 },
  { name: "Next.js", logo: "/logos/nextjs.svg", level: 70 },
  { name: "Typescript", logo: "/logos/tys.svg", level: 70 },
  { name: "TailwindCss", logo: "/logos/tailwindcss.svg", level: 70 },
  { name: "HTML5", logo: "/logos/html5.svg", level: 90 },
  { name: "CSS3", logo: "/logos/css.svg", level: 85 },
  { name: "JavaScript", logo: "/logos/javascript.svg", level: 95 },
  { name: "Java", logo: "/logos/java.svg", level: 65 },
  { name: "Python", logo: "/logos/python.png", level: 40 },
  { name: "Git", logo: "/logos/github.svg", level: 80 },
  { name: "Postman", logo: "/logos/postman.svg", level: 80 },
 
  
  { name: "MySQL", logo: "/logos/mysql.svg", level: 75 },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg", level: 50 },
];

const TechStack = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // solo necesitamos la primera vez
        }
      },
      { threshold: 0.2 } // el 20% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={ref}
      className="techstack-section"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
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
    </motion.section>
  );
};

export default TechStack;
