// TechCard.jsx
import React, { useRef } from "react";
import "./TechStack.css"; // Assuming you have a CSS file for styling
import ReactLogo from "./ReactLogo.jsx";

const TechCard = ({ logo, name, level }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height/2) / 20) * -1;
    const rotateY = ((x - rect.width/2) / 20);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
  <div
    ref={cardRef}
    className="tech-card"
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
  >
    {name === "React" ? (
      <ReactLogo className="tech-logo" />
    ) : (
      <img src={logo} alt={name} className="tech-logo" />
    )}
    
    <p>{name}</p>
    <div className="tech-bar">
      <div
        className="tech-bar-fill"
        style={{ width: `${level}%` }}
      ></div>
    </div>
    <p className="porcent">{level}%</p>
  </div>
);

};

export default TechCard;
