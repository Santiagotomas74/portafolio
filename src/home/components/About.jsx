import React from 'react';
import './About.css';
 

import { useLanguage } from './context/LanguageContext'; // Importa el hook de idioma
import translations from './translations/AbouTranslations'; // Importa tus traducciones
 
function Aboutview() {
  const { language } = useLanguage(); // Solo necesitamos el idioma actual, no la función de cambio aquí
  const t = translations[language]; // Accede a los textos del idioma actual

  return (
   
    <>
        
 
      <div className="about-container">
        <h1>{t.aboutTitle}</h1> {/* Texto traducido */}

        <p className="intro">
          {t.aboutIntroPart1}<strong>Santiago Taher</strong>{t.aboutIntroPart2}<strong>Full Stack</strong>{t.aboutIntroPart3}
          <strong>San Miguel, Buenos Aires</strong> y actualmente curso el tercer año de la <strong>{t.aboutIntroPart5}</strong> en la UNGS.
        </p>

        <section>
          <h2>{t.academicTrainingTitle}</h2> {/* Texto traducido */}
          <ul>
            <li>{t.ungsDegree}</li> {/* Texto traducido */}
            <li>{t.leloirDegree}</li> {/* Texto traducido */}
          </ul>
        </section>

        <section>
          <h2>{t.complementaryTrainingTitle}</h2> {/* Texto traducido */}
          <ul>
            <li>
              <strong>{t.utnCourse}</strong><br /> {/* Texto traducido */}
              {t.utnCourseContent} {/* Texto traducido */}
            </li>
          </ul>
        </section>

        <section>
          <h2>{t.techStackTitle}</h2> {/* Texto traducido */}
          <ul>
            <li><strong>{t.languages}</strong> JavaScript, Python, Java, C#, Assembler</li> {/* Texto traducido */}
            <li><strong>{t.frontend}</strong> React.js, Redux Toolkit, Vite, Material UI, Bootstrap</li> {/* Texto traducido */}
            <li><strong>{t.backend}</strong> Node.js, Express, JWT, REST APIs</li> {/* Texto traducido */}
            <li><strong>{t.databases}</strong> PostgreSQL, MySQL, MongoDB</li> {/* Texto traducido */}
            <li><strong>{t.tools}</strong> Git, GitHub, Vercel, Railway, EmailJS, MercadoPago SDK</li> {/* Texto traducido */}
            <li><strong>{t.bestPractices}</strong> Arquitectura MVP, Arquitectura limpia, Testing con JUnit</li> {/* Texto traducido */}
          </ul>
        </section>

        <h1>{t.certificates}</h1> {/* Texto traducido */}
       
        <img
          src="/certificados/certificadopFullStack.png"
          alt="Certificado de curso de desarrollo Full Stack UTN"
          className="cert-image"
        />
         <img
          src="/certificados/certificadoFront.png"
          alt="Certificado de curso de desarrollo Frontend UTN"
          className="cert-image"
        />
      </div>
   </>
    
  );
}

export default Aboutview;