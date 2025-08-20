import { useRef, useState, useEffect } from 'react';
import './Home.css';

function HomeContentWithParallax({ children }) {
  const contentRef = useRef(null);
  const [transformValues, setTransformValues] = useState({ rotateX: 0, rotateY: 0, translateZ: 0 });

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;
    
    if (window.innerWidth <= 768) return;

    
    let animationFrameId = null;
    const margin = 10; // tolerancia en píxeles

    const handleMouseMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        const { left, top, width, height } = contentElement.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateY = (mouseX / (width / 2)) * 5;
        const rotateX = (mouseY / (height / 2)) * -5;
        const translateZ = 20;

        setTransformValues({ rotateX, rotateY, translateZ });
      });
    };

    const handlePointerLeave = (e) => {
      const rect = contentElement.getBoundingClientRect();
      if (
        e.clientX <= rect.left - margin ||
        e.clientX >= rect.right + margin ||
        e.clientY <= rect.top - margin ||
        e.clientY >= rect.bottom + margin
      ) {
        setTransformValues({ rotateX: 0, rotateY: 0, translateZ: 0 });
      }
    };

    contentElement.addEventListener('pointermove', handleMouseMove);
    contentElement.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      contentElement.removeEventListener('pointermove', handleMouseMove);
      contentElement.removeEventListener('pointerleave', handlePointerLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={contentRef}
      className="home-content--"
      style={{
        transform: `rotateX(${transformValues.rotateX}deg) rotateY(${transformValues.rotateY}deg) translateZ(${transformValues.translateZ}px)`,
        transition: 'transform 0.2s ease',
      }}
    >
      {children}
    </div>
  );
}

export default HomeContentWithParallax;
