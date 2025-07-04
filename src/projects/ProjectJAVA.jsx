import React from 'react';
import './Java.css';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

function ProjectJava() {
  const navigate = useNavigate();
  return (
    <>
      {/* Botón fijo en la esquina superior izquierda */}
      <div className="back-button-container2">
        <Tooltip title="Volver">
          <IconButton onClick={() => navigate("/projects")}>
            <ArrowBackIcon fontSize="large" className="back-button2" />
          </IconButton>
        </Tooltip>
      </div>

      {/* Contenido del proyecto */}
      <div className="project-detail-container2">
      <h1>Proyectos Destacados en Java, Python y Assembler</h1>
      
      <p><strong>Rol:</strong> Desarrollador en entornos de escritorio, algorítmicos y sistemas</p>

      <h3>Simulación de Empresa de Viajes (Java)</h3>
      <p>
        Desarrollo de un sistema de escritorio para gestionar una empresa de viajes. Permite administrar paquetes, estadías, excursiones y clientes.
        Se utilizaron conceptos de <strong>POO</strong> como herencia, abstracción y encapsulamiento, además de algoritmos con complejidad temporal optimizada.
      </p>

      <h3>Juego tipo Rompecabezas con WindowBuilder (Java)</h3>
      <p>
        Juego de puzzle implementado con <strong>Java + WindowBuilder</strong>. El usuario debe ordenar piezas en un tablero con un número limitado de movimientos y tiempo.
        Se utilizó la arquitectura <strong>Forms and Controls</strong> para desacoplar presentación de la lógica.
      </p>

      <h3>Aplicación de Árbol Generador Mínimo con JMapViewer (Java)</h3>
      <p>
        Aplicación que muestra puntos geográficos conectados mediante aristas con pesos definidos por el usuario. Implementa el <strong>algoritmo de Prim</strong> y el patrón <strong>MVP</strong> para calcular el recorrido óptimo entre nodos.
      </p>

      <h3>Problema de la Mochila – Salón de Fiestas (Java)</h3>
      <p>
        Simulación de ofertas sobre el uso de un salón de eventos en 24 horas. Utiliza algoritmos de selección para <strong>maximizar ganancias</strong> sin superposición horaria. Desarrollado bajo <strong>MVP</strong>.
      </p>

      <h3>Testeo Unitario con JUnit (Java)</h3>
      <p>
        Desarrollo de pruebas unitarias con <strong>JUnit</strong> cubriendo métodos, excepciones y escenarios límite. Aplicación de <strong>mock frameworks</strong> y buenas prácticas de testing.
      </p>

      <hr />

      <h3>Juego 2D – Java (proyecto grupal)</h3>
      <p>
        Juego 2D ambientado en una ciudad invadida por monstruos. El jugador debe eliminar enemigos, esquivar disparos y coches, y enfrentar a un jefe final. Menús de victoria/derrota según el desempeño.
      </p>
      <ul>
        <li>Eliminación de enemigos con proyectiles.</li>
        <li>Manejo de colisiones y estados del jugador.</li>
        <li>Diseño de interfaz con menús dinámicos.</li>
        <li><strong>POO en Java</strong>, manejo de arrays y objetos.</li>
      </ul>

      <h3>Proyecto en ARM – Raspberry Pi (Assembler)</h3>
      <p>
        Programa que codifica y decodifica mensajes usando el <strong>cifrado César</strong>. Implementado en ensamblador para <strong>ARM v8</strong>, ejecutado sobre Raspberry Pi.
      </p>
      <ul>
        <li>Codificación mediante desplazamiento basado en vector.</li>
        <li>Decodificación con palabra clave.</li>
        <li>Conteo de caracteres procesados como resultado.</li>
        <li>Uso de <strong>registros, subrutinas, pila e interrupciones</strong>.</li>
        <li>Aplicación de <strong>arquitectura RISC</strong> y operaciones lógicas.</li>
      </ul>

      <h3>Juego de Palabras – Python</h3>
      <p>
        Juego tipo anagrama donde se presentan palabras mezcladas que deben reordenarse. Se puntúa según longitud y validez semántica.
      </p>
      <ul>
        <li>Palabras de 3 a 7 letras validadas contra diccionario.</li>
        <li>Sistema de puntaje positivo/negativo.</li>
        <li>Límite de tiempo para resolver el desafío.</li>
        <li>Manejo de listas, bucles, funciones, condiciones y retorno de datos.</li>
        <li>Uso de librerías básicas de Python.</li>
      </ul>

      <h3>Resultado General</h3>
      <p>
        Este conjunto de proyectos me permitió desarrollar experiencia en distintos paradigmas: desde interfaces gráficas complejas en Java,
        pasando por juegos lógicos y proyectos algorítmicos, hasta desarrollo en bajo nivel con assembler y Raspberry Pi. También reforzó mis habilidades 
        en estructuras de datos, testing, arquitectura modular y lógica aplicada.
      </p>
    </div>
    </>
  );
}

export default ProjectJava;
