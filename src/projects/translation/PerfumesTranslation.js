const translations = {
    es: {
      // ... textos anteriores
      // NUEVOS TEXTOS PARA PROJECTDETAIL - PERFUMERÍA
      back: "Volver",
      role: "Rol:",
      techStack: "Tecnologías:",
      projectOverview: "Descripción general del proyecto",
      projectPerfumesDescription:
        "Perfumería Online es una aplicación web tipo SPA enfocada en la venta de perfumes. El objetivo fue crear un e-commerce completo con autenticación de usuarios, carrito de compras persistente, pasarela de pagos, gestión de productos y panel de administración.",
      
      frontendTitle: "Frontend (React.js + Redux Toolkit + Material UI)",
      frontendPoint1:
        "Se desarrollaron interfaces modernas y responsivas con React.js y Material UI, asegurando una experiencia atractiva y coherente en diferentes dispositivos.",
      frontendPoint2:
        "Se integró Redux Toolkit para manejar el estado global del carrito de compras, sesión de usuario y listado de productos de forma eficiente.",
      frontendPoint3:
        "El flujo de compra incluye autenticación de usuarios, selección de perfumes, gestión del carrito, historial de compras y acceso a un panel privado.",
      frontendPoint4:
        "Se implementaron validaciones en formularios de registro, login y checkout, brindando feedback inmediato a los usuarios.",
      
      backendTitle: "Backend (Node.js + Express)",
      backendPoint1:
        "Se implementaron endpoints RESTful para gestionar productos, usuarios, pedidos y pagos, organizados bajo arquitectura modular (rutas, controladores y servicios).",
      backendPoint2:
        "El backend maneja autenticación con JSON Web Tokens (JWT), garantizando seguridad en las rutas protegidas.",
      backendPoint3:
        "Se añadieron middlewares personalizados para validaciones, control de acceso y manejo de errores.",
      backendPoint4:
        "Integración con MercadoPago SDK para procesar pagos seguros y notificaciones de estado de transacciones.",
      
      databaseTitle: "Base de Datos (MySQL)",
      databasePoint1:
        "La base de datos se estructuró en MySQL con tablas normalizadas para usuarios, productos, pedidos y transacciones.",
      databasePoint2:
        "Se definieron relaciones mediante claves foráneas, garantizando consistencia en el manejo de pedidos y detalles de productos.",
      databasePoint3:
        "Consultas optimizadas para mejorar el rendimiento en operaciones de lectura y escritura de pedidos y stock.",
      
      securityPracticesTitle: "Prácticas de seguridad",
      securityPoint1: "Contraseñas encriptadas con bcrypt antes de almacenarse en la base de datos.",
      securityPoint2: "Protección CORS implementada para restringir accesos desde dominios no autorizados.",
      securityPoint3: "Validaciones de entrada tanto en frontend como en backend para prevenir inyecciones SQL y XSS.",
      
      adminPanelTitle: "Panel de Administración",
      adminPanelPoint1:
        "Se creó un panel privado para gestionar el inventario de perfumes, incluyendo la creación, edición y eliminación de productos.",
      adminPanelPoint2:
        "Permite a los administradores ver y gestionar pedidos de clientes en tiempo real.",
      adminPanelPoint3:
        "Integración con EmailJS para envío de notificaciones y mensajes de contacto.",
    },
  
    en: {
      // ... previous texts
      // NEW TEXTS FOR PROJECTDETAIL - PERFUMERY
      back: "Back",
      role: "Role:",
      techStack: "Technologies:",
      projectOverview: "Project Overview",
      projectPerfumesDescription:
        "Perfumes Online is a SPA web application focused on selling perfumes. The goal was to build a complete e-commerce with user authentication, persistent shopping cart, payment gateway integration, product management, and an admin panel.",
      
      frontendTitle: "Frontend (React.js + Redux Toolkit + Material UI)",
      frontendPoint1:
        "Modern and responsive interfaces were developed with React.js and Material UI, ensuring an appealing and consistent experience across devices.",
      frontendPoint2:
        "Redux Toolkit was integrated to handle global state for the shopping cart, user session, and product listings efficiently.",
      frontendPoint3:
        "The purchase flow includes user authentication, perfume selection, cart management, purchase history, and access to a private panel.",
      frontendPoint4:
        "Validations were implemented in registration, login, and checkout forms, providing immediate feedback to users.",
      
      backendTitle: "Backend (Node.js + Express)",
      backendPoint1:
        "RESTful endpoints were implemented to manage products, users, orders, and payments, organized under modular architecture (routes, controllers, services).",
      backendPoint2:
        "The backend handles authentication with JSON Web Tokens (JWT), ensuring security for protected routes.",
      backendPoint3:
        "Custom middlewares were added for validations, access control, and error handling.",
      backendPoint4:
        "Integration with MercadoPago SDK to process secure payments and transaction status notifications.",
      
      databaseTitle: "Database (MySQL)",
      databasePoint1:
        "The database was structured in MySQL with normalized tables for users, products, orders, and transactions.",
      databasePoint2:
        "Relationships were defined using foreign keys, ensuring consistency in order and product detail management.",
      databasePoint3:
        "Optimized queries improved performance in read and write operations for orders and stock.",
      
      securityPracticesTitle: "Security Practices",
      securityPoint1: "Passwords encrypted with bcrypt before being stored in the database.",
      securityPoint2: "CORS protection implemented to restrict access from unauthorized domains.",
      securityPoint3: "Input validations on both frontend and backend to prevent SQL injections and XSS attacks.",
      
      adminPanelTitle: "Admin Panel",
      adminPanelPoint1:
        "A private panel was built to manage perfume inventory, including product creation, editing, and deletion.",
      adminPanelPoint2:
        "Allows administrators to view and manage customer orders in real time.",
      adminPanelPoint3:
        "Integration with EmailJS for notifications and contact messages.",
    },
  };
  
  export default translations;
  