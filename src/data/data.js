// Skills usan iconos de react-icons (Si/Devicons + Fa)
// Projects/Experience usan nombres de iconos Lucide

export const profileData = {
  username: "joseperezm.dev",
  fullName: "Jose Abel Perez Marchena",
  title: "Desarrollador Full Stack ",
  bio: [
    "Transformo ideas en experiencias digitales",
    "Apasionado por el código limpio y el buen diseño",
    "Disponible para proyectos remotos",
  ],
  tags: ["#React", "#Node", "#.NET", "#SQL"],
  link: "linkedin.com/in/joseperezmarchena/",
  email: "jose280726@gmail.com",
  socials: [
    { icon: "FaGithub",   label: "GitHub",   href: "https://github.com/japmming", color: "#24292e" },
    { icon: "FaLinkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/joseperezmarchena/", color: "#0077b5" },
    { icon: "FaTwitter",  label: "Twitter",  href: "",                             color: "#1da1f2" },
    { icon: "FaBehance",  label: "Behance",  href: "",                             color: "#1769ff" },
  ],
  stats: {
    projects: 5,
    experience: 3,
    satisfaction: "98%",
  },
};

// icon: nombre del componente de react-icons/si, react-icons/fa o react-icons/vsc
export const skills = [
  { iconLib: "si",  icon: "SiReact",         label: "React",        color: "#61DAFB" },
  { iconLib: "si",  icon: "SiDotnet",        label: ".Net",         color: "#4169E1" },
  { iconLib: "si",  icon: "SiNodedotjs",     label: "Node.js",      color: "#339933" },
  { iconLib: "si",  icon: "SiJavascript",    label: "Javascript",   color: "#ffd000" },
  { iconLib: "si",  icon: "SiTypescript",    label: "TypeScript",   color: "#3178c6" },
  { iconLib: "si",  icon: "SiPostgresql",    label: "SQL",          color: "#4169E1" },
  { iconLib: "si",  icon: "SiGit",           label: "Git",          color: "#f5511e" },
  { iconLib: "si",  icon: "SiPostman",       label: "Postman",      color: "#FF6F00" },
  { iconLib: "si",  icon: "SiTailwindcss",   label: "Tailwind CSS", color: "#00bcff" },
  { iconLib: "si",  icon: "SiBootstrap",     label: "Bootstrap",    color: "#1a49b6" },
  { iconLib: "si",  icon: "SiDocker",        label: "Docker",       color: "#2496ED" },
  { iconLib: "si",  icon: "SiPython",        label: "Python",       color: "#3776AB" },
  { iconLib: "vsc", icon: "VscAzureDevops",  label: "Azure DevOps", color: "#4169E1" },
  //{ iconLib: "si", icon: "SiFigma",         label: "Figma",       color: "#F24E1E" },
  //{ iconLib: "si", icon: "SiAmazon",        label: "AWS",         color: "#FF9900" },
  
 
];

export const experience = [
  {
    role: "Practicante Full-Stack Developer",
    company: "JAZANI Consultora Ambiental",
    period: "Abr 2026 – May 2026",
    location: "Remoto",
    desc: "Diseñé microservicios en C# (.NET) para datos geoespaciales, mejorando la eficiencia un 10%. Desarrollé módulos en React para capas geográficas y documenté APIs con Swagger, asegurando la consistencia del desarrollo.",
    tags: ["Microservices", "React", ".NET", "APIs", "Swagger"],
    current: false,
  },
  {
    role: "Full-Stack Developer Junior",
    company: "NATCODEE SAC",
    period: "Feb 2023 – Dic 2025",
    location: "Remoto",
    desc: "Soporté ERPs/CRMs críticos en .NET y AngularJS. Optimicé SQL Server reduciendo tiempos un 25%, integré APIs de Meta/TikTok, rediseñé la UI con Bootstrap (+20% de usabilidad) y gestioné el ciclo con Azure DevOps y Scrum.",
    tags: ["C#", "SQL", "Azure DevOps", ".NET"],
    current: false,
  },
  
  
];

// Artículos del blog (pestaña "Blog" del feed)
export const blogPosts = [
  {
    id: "arquitectura-clean-dotnet",
    title: "Arquitectura limpia en .NET: lecciones de mi día a día",
    category: "Backend",
    date: "12 Jun 2026",
    readTime: 6,
    excerpt:
      "Organizar una solución .NET por capas no es decoración: es la diferencia entre un proyecto que muta sin dolor y un monstruo que nadie quiere tocar.",
    content: [
      "Durante años escribí código que funcionaba... hasta que dejaba de funcionar. El problema casi nunca era la lógica: era el acoplamiento. Cada capa hablando con la base de datos, cada servicio con acceso directo al repositorio, y cualquier cambio a una tabla terminaba reventando tres pantallas distintas.",
      "Lo primero que cambié fue la dirección de las dependencias. La capa de dominio ya no sabe que existe SQL Server, y la aplicación solo comunica contratos. Cuando aplicamos esto en el proyecto de NATCODEE, refactorizar una entidad pasó de tomar semanas a tomar horas.",
      "El segundo truco fue dividir por feature (módulos de negocio) en lugar de por capa técnica global. Cada feature expone su propia API interna, y el resultado es que el equipo trabaja en paralelo sin pisarse. Esto reduce la herencia de responsabilidades cruzadas de forma visible.",
      "Mi consejo si recién empiezas: no copies la arquitectura de una empresa grande. Arranca con dos proyectos (dominio y aplicación), mide, y agrega capas solo cuando el dolor real te lo pida.",
    ],
    tags: [".NET", "Clean Architecture", "SQL Server"],
  },
  {
    id: "pipeline-ci-cd-azure-devops",
    title: "Cómo montamos un pipeline CI/CD en Azure DevOps que sí aguanta",
    category: "DevOps",
    date: "05 Jul 2026",
    readTime: 5,
    excerpt:
      "Un pipeline no es un archivo YAML bonito: es un acuerdo con tu equipo sobre cómo se entrega el software sin fricciones.",
    content: [
      "El primer pipeline que escribí hacía build, corría tests y desplazaba a producción... en teoría. En la práctica fallaba cada dos despliegues porque nadie controlaba qué se iba a prod y las variables de entorno cambiaban en tres sitios distintos.",
      "Lo que lo arregló fue separar las etapas con gates manuales y approvals. El build y los tests corren automáticos; el despliegue a staging también; pero pasar a producción requiere aprobación del responsable. Eso generó confianza y mató la fricción de '¿quién lanzó esto?'.",
      "Además centralizamos todas las variables en variable groups del proyecto y versionamos los entornos con la misma infraestructura. Ahora reproducir un entorno completo lleva minutos, no tardes.",
      "Resultado: redujimos el tiempo de release de días a horas, y los despliegues fallidos pasaron a ser la excepción, no la regla.",
    ],
    tags: ["Azure DevOps", "CI/CD", "Release Management"],
  },
  {
    id: "apis-rest-escalables",
    title: "APIs REST que sobreviven a 200 usuarios simultáneos",
    category: "Backend",
    date: "18 Ago 2026",
    readTime: 7,
    excerpt:
      "El rendimiento de una API se decide en el contrato y la consulta, no en el servidor donde la pones.",
    content: [
      "Cuando una API se pone lenta, la tentación es comprar más RAM. Pero en 9 de cada 10 casos el problema está en el contrato: endpoints que devuelven veinte campos cuando el cliente usa cinco, o consultas N+1 disfrazadas de 'query simple'.",
      "Empecé por dos reglas duras: devolver solo lo que la pantalla necesita y paginar todo. Eso por sí solo bajó la carga de la base de datos más de la mitad en nuestros dashboards.",
      "El segundo frente fue la caché. No caché la respuesta completa si no el resultado de consultas lentas, con invalidación por evento. Así la misma consulta estadística pasó de 800ms a 12ms.",
      "Medir es la mitad del trabajo: configuramos métricas por endpoint (latencia p95, tasa de error) y ahora cualquier regresión se detecta antes de que el cliente la note.",
    ],
    tags: ["Node.js", "REST", "Redis"],
  },
  {
    id: "componentes-react-reutilizables",
    title: "Componentes reutilizables en React: props, composición y patrones",
    category: "Frontend",
    date: "08 Oct 2026",
    readTime: 6,
    excerpt:
      "Un buen componente no es el que hace todo, es el que resuelve un problema y se adapta sin romperse.",
    content: [
      "Cuando empecé con React, tendía a crear componentes gigantes que hacían fetch, lógica y render todo junto. Eso funcionaba hasta que necesitaba el mismo botón con un pequeño cambio: terminaba duplicando código o pasando diez props distintas.",
      "La clave está en pensar en composición. En lugar de añadir una prop 'variant' con veinte casos, uso children y slots. Así puedo construir desde fuera lo que necesito sin sobrecargar el componente con lógica condicional.",
      "Otro truco que me ha salvado es separar lógica de presentación. Extraigo hooks personalizados (useForm, useFetch) para mantener el JSX limpio y testeable. Si puedo leer un componente como una descripción UI sin saltar entre funciones, voy por buen camino.",
      "Mi regla práctica: si un componente necesita más de 5 props para cubrir casos reales, probablemente esté haciendo demasiado. Mejor dividirlo en piezas más pequeñas y componerlas.",
    ],
    tags: ["React", "Componentes", "Hooks", "Composición"],
  },
  {
    id: "tailwind-css-diseno-rapido",
    title: "Tailwind CSS: diseñar rápido sin sacrificar consistencia",
    category: "Frontend",
    date: "22 Sep 2026",
    readTime: 5,
    excerpt:
      "Tailwind cambia la forma de pensar el CSS: en lugar de escribir clases, compones utilidades que ya forman un sistema de diseño.",
    content: [
      "Al principio me costaba acostumbrarme a ver clases como 'flex items-center gap-4' en el HTML. Pero tras usarlo en varios proyectos, lo veo claro: Tailwind fuerza un sistema. Espaciados, colores, radios y tipografías vienen de una escala coherente.",
      "El mayor beneficio para mí ha sido la velocidad. No tengo que pensar en nombres de clases, saltar entre archivos CSS o pelear con especificidad. Todo está ahí, y puedo ver el diseño directamente en el JSX.",
      "Para mantenerlo escalable, uso @apply solo en casos muy puntuales (como clases base complejas) y prefiero componentes React con sus clases reutilizadas. También configuro el theme en tailwind.config para extender colores/espaciados del proyecto.",
      "Mi recomendación: no luches contra las utilidades. Aprende la convención y combina con componentes. El resultado es código más mantenible y diseños más consistentes entre páginas.",
    ],
    tags: ["Tailwind CSS", "UI/UX", "Design System", "CSS"],
  },
  {
    id: "optimizacion-consultas-sql-server",
    title: "Optimización de consultas en SQL Server: índices, planes y tips prácticos",
    category: "Backend",
    date: "15 Sep 2026",
    readTime: 7,
    excerpt:
      "Un buen índice puede salvarte de un escaneo completo. Saber cuándo usarlo (y cuándo NO) marca la diferencia.",
    content: [
      "Redujimos tiempos de consulta en un 25% con cambios sencillos. El primer paso siempre es mirar el plan de ejecución. Ahí te dice si está haciendo un Table Scan, Index Seek, o Key Lookup sin rodeos.",
      "Los índices clustered vs non-clustered son fundamentales. Un clustered organiza la tabla físicamente, mientras que un non-clustered apunta a él. Crear demasiados índices non-clustered puede penalizar INSERT/UPDATE/DELETE, así que hay que equilibrar.",
      "Ojo con los índices compuestos: el orden de las columnas importa muchísimo. Si filtras por A y luego por B, el índice (A,B) funciona; (B,A) puede no aprovecharse. También conviene poner primero las columnas de filtro/equality y luego las de rango.",
      "Otros tips prácticos: evitar SELECT *, usar EXISTS en lugar de IN con subconsultas grandes cuando corresponda, revisar estadísticas desactualizadas (UPDATE STATISTICS) y tener cuidado con funciones sobre columnas en WHERE (rompen el uso del índice).",
      "Mi mantra: mide antes y después con el plan de ejecución. Si no mejoras, quita el índice.",
    ],
    tags: ["SQL Server", "Índices", "Performance", "Stored Procedures"],
  },
  {
    id: "herramientas-ia-para-desarrolladores-2026",
    title: "Herramientas IA para desarrolladores en 2026: las que realmente uso",
    category: "IA",
    date: "01 Oct 2026",
    readTime: 6,
    excerpt:
      "No se trata de usar todas las herramientas, sino de elegir las correctas para acelerar sin perder control del código.",
    content: [
      "El ecosistema IA cambia cada mes, pero hay unas cuantas que se han quedado en mi flujo diario. Para autocompletado y chat contextual, uso asistentes integrados en el IDE que entienden el proyecto completo, no solo el archivo abierto.",
      "Para generar tests, documentación o refactorizar código legacy, los agentes con contexto del repo son imparables. Pueden entender dependencias, tipos y convenciones si les das un buen prompt con el objetivo claro.",
      "Mi top práctico: asistentes para debugging (explicar errores, sugerir fixes), herramientas para generar commits semánticos, y agentes para crear migraciones o scaffolding repetitivo. Todo eso me ahorra horas semanales.",
      "Cuidado con delegar sin revisar. Siempre leo el diff, entiendo los cambios y ejecuto tests. La IA es un copiloto increíble, pero el criterio arquitectónico sigue siendo mío.",
      "Mi consejo: empieza con UNA herramienta, intégrala bien en tu flujo, y cuando veas ahorro real, añade la siguiente.",
    ],
    tags: ["IA", "Herramientas", "Productividad", "Copilot", "Agentes"],
  },
  {
    id: "proyectos-ia-practicos-ideas-aprender",
    title: "Proyectos IA prácticos para aprender: de chatbot a RAG",
    category: "IA",
    date: "18 Oct 2026",
    readTime: 7,
    excerpt:
      "La mejor forma de aprender IA aplicada es construyendo proyectos reales con datos que te interesen.",
    content: [
      "Si quieres aprender IA aplicada, olvida los tutoriales de 12 horas sin código. Mejor elige un proyecto pequeño que resuelva algo que tú mismo usarías.",
      "Mi ruta recomendada para empezar: 1) Chatbot con contexto simple usando un modelo de API. 2) Clasificador o extractor de datos con prompts estructurados. 3) Sistema RAG (Retrieval Augmented Generation) para buscar en tus propios documentos (PDFs, notas). 4) Agente con herramientas (búsqueda, email, o base de datos).",
      "Para el primer proyecto, usa embeddings simples, un vector store local (como Chroma o FAISS) y una API de LLM. No hace falta GPU cara para aprender los conceptos.",
      "Un proyecto que me gustó mucho fue crear un chatbot para consultar mi propia base de datos SQL con lenguaje natural (como el que tengo en mi portfolio). Ahí aprendes SQL, prompts, validación de queries y manejo de errores todo junto.",
      "Mi recomendación: documenta el proyecto en GitHub, explica las decisiones en README, y muestra ejemplos. Eso vale más que certificar 10 cursos.",
    ],
    tags: ["IA", "RAG", "Chatbot", "Embeddings", "Proyectos"],
  },
];

// lucideIcon: nombre del icono Lucide para el feed card
// imgSrc (opcional): ruta de la captura en /public, ej. "/captura-proyecto.webp".
// Si no existe, el feed y el modal muestran el degradado + icono como fallback.
export const projects = [
  {
    lucideIcon: "CalendarClock",
    gradient: "linear-gradient(135deg,#667eea,#764ba2)",
    title: "Sistema de Gestión de Citas",
    stack: "React · .NET · SQL",
    likes: 248,
    comments: 14,
    desc: "Sistema de gestión de citas y reservas para negocios de servicios (barberías, spas, consultorios), con control de disponibilidad por proveedor, roles de usuario y validación de solapamiento de horarios.",
    tags: ["React", "Tailwind CSS", "JWT", "API", "SQL Server"],
    githubUrl : "https://github.com/japmming/PortalReservas-",
    imgSrc: "/screenshot-portal-citas.webp",
  },
  {
    lucideIcon: "BarChart2",
    gradient: "linear-gradient(135deg,#f093fb,#f5576c)",
    title: "Sistema web CRM ",
    stack: "NET Framework · Bootstrap · AngularJS",
    likes: 312,
    comments: 22,
    desc: "Sistema CRM web desarrollado para NATCODEE, gestiona campañas, eventos, leads, comercialización y métricas comerciales, así como la administración de usuarios y permisos. Toda la lógica de negocio se ejecuta mediante stored procedures en SQL Server.",
    tags: ["C#", "AngularJS", "SQL Server", "Bootstrap"],
    githubUrl : "https://github.com/japmming/CRM.AppWeb",
    imgSrc: "/screenshot-crm-natcodee.webp",
  },
  {
    lucideIcon: "Bot",
    gradient: "linear-gradient(135deg,#4facfe,#00f2fe)",
    title: "Chatbot SQL con Google Gemini",
    stack: "NET Core · Gemini · SQL",
    likes: 529,
    comments: 41,
    desc: "Aplicación web ASP.NET Core MVC que permite consultar una base de datos SQL Server en lenguaje natural usando Google Gemini como motor de IA.",
    tags: ["C#", "Google Gemini", "SQL Server", "MVC", "IA"],
    githubUrl : "https://github.com/japmming/Chatbot_SQL",
    imgSrc: "/screenshot-chatbot-sql.webp",
  },
  {
    lucideIcon: "Globe",
    gradient: "linear-gradient(135deg,#43e97b,#38f9d7)",
    title: "Portafolio Landing Page",
    stack: "React 18 · Framer Motion · CSS Modules",
    likes: 187,
    comments: 9,
    desc: "Portafolio personal con estética de Instagram, construido con React 18, Framer Motion y CSS Modules. Totalmente responsive: replica el layout del perfil de Instagram en desktop y móvil, con feed de proyectos, timeline de experiencia, blog y formulario de contacto.",
    tags: ["React 18", "Framer Motion", "CSS Modules", "Responsive Design"],
    githubUrl : "https://github.com/japmming/Portafolio",
    link: "https://joseperezm-dev.vercel.app/",
    imgSrc: "/screenshot-portfolio-personal.webp",
  },
  {
    lucideIcon: "Globe",
    gradient: "linear-gradient(135deg,#fa709a,#fee140)",
    title: "Portafolio Landing Page (Cliente)",
    stack: "Next.js · Sanity CMS · TypeScript",
    likes: 401,
    comments: 35,
    desc: "Este es el repositorio del portafolio web personal e interactivo para un cliente, Ingeniero Geógrafo y Especialista en Sistemas de Información Geográfica (SIG). El sitio está diseñado bajo un enfoque visual temático de geomática, cartografía y topografía de vanguardia.",
    tags: ["Next.js", "Sanity", "TypeScript", "Responsive Design", "UI/UX"],
    githubUrl : "https://github.com/japmming/portfolio-frankdavid",
    link: "https://frankchavezmarchena.vercel.app/",
    imgSrc: "/screenshot-portfolio-ing-geografica.webp",
  },
  // {
  //   lucideIcon: "Home",
  //   gradient: "linear-gradient(135deg,#a18cd1,#fbc2eb)",
  //   title: "Real Estate Platform",
  //   stack: "Next.js · GraphQL · AWS",
  //   likes: 276,
  //   comments: 18,
  //   desc: "Plataforma inmobiliaria con búsqueda geolocalizada, tour virtual 360°, calculadora de hipotecas y chat en tiempo real entre compradores y agentes.",
  //   tags: ["Next.js", "GraphQL", "AWS S3", "Mapbox", "Socket.io"],
  //   githubUrl : "https://github.com/japmming",
  // },
  // {
  //   lucideIcon: "BookOpen",
  //   gradient: "linear-gradient(135deg,#ffecd2,#fcb69f)",
  //   title: "LMS Educativo",
  //   stack: "Django · Vue.js · PostgreSQL",
  //   likes: 143,
  //   comments: 7,
  //   desc: "Sistema de gestión de aprendizaje con cursos en video, quizzes interactivos, certificados digitales y foro de discusión. Más de 2,000 estudiantes activos.",
  //   tags: ["Django", "Vue.js", "PostgreSQL", "Celery", "FFmpeg"],
  //   githubUrl : "https://github.com/japmming",
  // },
  // {
  //   lucideIcon: "Globe",
  //   gradient: "linear-gradient(135deg,#89f7fe,#66a6ff)",
  //   title: "SaaS Landing Page",
  //   stack: "HTML · CSS · GSAP",
  //   likes: 389,
  //   comments: 27,
  //   desc: "Landing page de alto impacto con animaciones fluidas, optimización de conversión A/B, video background y formulario de captura de leads. Velocidad 98/100 en PageSpeed.",
  //   tags: ["HTML", "CSS", "GSAP", "Vanilla JS", "Webflow"],
  //   githubUrl : "https://github.com/japmming",
  // },
  // {
  //   lucideIcon: "Zap",
  //   gradient: "linear-gradient(135deg,#fddb92,#d1fdff)",
  //   title: "API RESTful",
  //   stack: "Node · Express · Docker",
  //   likes: 215,
  //   comments: 11,
  //   desc: "API robusta con autenticación OAuth2, rate limiting, caché con Redis, documentación Swagger y tests de integración automatizados. Dockerizada para Kubernetes.",
  //   tags: ["Node.js", "Express", "Docker", "Redis", "Swagger"],
  //   githubUrl : "https://github.com/japmming",
  // },
];
