import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Crea el Contexto
export const LanguageContext = createContext();

// 2. Crea el Componente Provider
export const LanguageProvider = ({ children }) => {
  // Intenta obtener el idioma guardado en localStorage, o usa 'es' por defecto
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('portfolioLanguage');
    return savedLanguage || 'es'; // 'es' como idioma predeterminado
  });

  // Guarda el idioma en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('portfolioLanguage', language);
  }, [language]);

  // La función para cambiar el idioma
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Hook personalizado para un uso más fácil
export const useLanguage = () => {
  return useContext(LanguageContext);
};