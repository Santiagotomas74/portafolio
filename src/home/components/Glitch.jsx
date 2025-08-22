import React, { useState, useEffect, useRef } from 'react';
import './Glitch.css'; // Asegúrate de que este archivo CSS esté en el MISMO DIRECTORIO que este componente.

const TypingGlitchText = ({
  text = '', // Valor por defecto añadido para asegurar que 'text' siempre sea una cadena
  typingSpeed = 100, // Velocidad de escritura en ms por caracter
  glitchInterval = 3000, // Intervalo entre glitches en ms
  glitchDuration = 300, // Duración de cada glitch en ms
  neonColor = '#00dbfc', // Color neón para el brillo
  loop = true, // Si el efecto debe repetirse indefinidamente
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const [hasFinishedTyping, setHasFinishedTyping] = useState(false); // Nuevo estado para controlar si la escritura ha terminado
  const textIndexRef = useRef(0);
  const typingTimerRef = useRef(null);
  const glitchTimerRef = useRef(null);
  const resetTimerRef = useRef(null);

  // Función auxiliar para limpiar todos los timers
  const clearAllTimers = () => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }
    if (glitchTimerRef.current) {
      clearTimeout(glitchTimerRef.current);
      glitchTimerRef.current = null;
    }
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  };

  // Función para iniciar la escritura
  const startTyping = () => {
    clearAllTimers(); // Limpia todos los timers antes de iniciar uno nuevo

    // Restablece el estado de finalización de escritura al iniciar
    setHasFinishedTyping(false); 

    // Si el texto no es una cadena o está vacío, no intentamos escribir
    if (typeof text !== 'string' || text.length === 0) {
      setDisplayedText('');
      setIsTyping(false);
      setHasFinishedTyping(true); // Considera que ha "terminado" si no hay texto
      return;
    }

    setIsTyping(true);
    textIndexRef.current = 0;
    setDisplayedText(''); // Reiniciar el texto para volver a escribir
    
    typingTimerRef.current = setInterval(() => {
      // Doble verificación del texto antes de acceder a un carácter
      if (typeof text !== 'string' || text.length === 0) {
        clearAllTimers();
        setDisplayedText('');
        setIsTyping(false);
        setHasFinishedTyping(true);
        return;
      }

      if (textIndexRef.current < text.length) {
        const charToAdd = text[textIndexRef.current];
        // ¡VERIFICACIÓN CRÍTICA! Solo agrega el carácter si no es undefined
        if (charToAdd !== undefined) {
          setDisplayedText((prev) => prev + charToAdd);
        }
        textIndexRef.current += 1;
      } else {
        // Una vez que todos los caracteres han sido escritos
        clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
        setIsTyping(false);
        setHasFinishedTyping(true); // Marca que la escritura ha terminado

        // Si no hay loop y no hay glitch, el texto final debe ser el texto completo
        if (!loop && glitchInterval === 0) {
          setDisplayedText(text); // Asegura que el texto final sea el completo
          return;
        }
        
        // Si el loop está activado o hay un intervalo de glitch, programar el glitch
        glitchTimerRef.current = setTimeout(triggerGlitch, glitchInterval);
      }
    }, typingSpeed);
  };

  // Función para activar el glitch
  const triggerGlitch = () => {
    setIsGlitching(true);
    // Limpia cualquier temporizador de reseteo existente
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }

    resetTimerRef.current = setTimeout(() => {
      setIsGlitching(false);
      // Si el loop está activado, reiniciar el ciclo (escribir de nuevo)
      if (loop) {
        startTyping(); // Reinicia el ciclo de escritura
      } else {
        // Si no hay loop, asegúrate de que el texto final sea el completo después del glitch
        setDisplayedText(text); 
      }
    }, glitchDuration);
  };

  useEffect(() => {
    startTyping(); // Inicia la animación al montar el componente

    // Función de limpieza para evitar fugas de memoria y temporizadores huérfanos
    return () => {
      clearAllTimers(); // Utiliza la función auxiliar de limpieza
    };
  }, [text, typingSpeed, glitchInterval, glitchDuration, loop]); // Dependencias del efecto

  return (
    <div className="typing-glitch-container">
      <h1 
        className={`typing-glitch-text ${isGlitching ? 'glitch' : ''}`}
        style={{ '--neon-color': neonColor }} // Pasa el color neón como variable CSS
      >
        {displayedText}
        {/* Cursor de escritura siempre que no haya glitch y el texto esté escribiéndose o haya terminado de escribirse */}
        {!isGlitching && (isTyping || hasFinishedTyping) && ( 
          <span className="typing-glitch-cursor"></span>
        )}
      </h1>
    </div>
  );
};

export default TypingGlitchText;
