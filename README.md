# 🧑‍💻 Portfolio Instagram — React + Framer Motion

Portafolio personal con estética de Instagram, construido con React y animaciones fluidas con Framer Motion.

---

## 🗂 Estructura del proyecto

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegación sticky + toggle modo oscuro
│   │   ├── Navbar.module.css
│   │   ├── ProfileHeader.jsx   # Sección "bio" estilo Instagram
│   │   ├── ProfileHeader.module.css
│   │   ├── Avatar.jsx          # Avatar con fallback si la imagen no carga
│   │   ├── Skills.jsx          # Highlights/Stories = tus habilidades
│   │   ├── Skills.module.css
│   │   ├── FeedGrid.jsx        # Grid de proyectos 3 columnas + modal
│   │   ├── FeedGrid.module.css
│   │   ├── Modal.jsx           # Modal de proyecto al hacer clic
│   │   ├── Modal.module.css
│   │   ├── Contact.jsx         # Formulario de contacto animado (mailto)
│   │   └── Contact.module.css
│   ├── data/
│   │   └── data.js             # ⭐ AQUÍ editas tu info, proyectos y skills
│   ├── App.jsx
│   ├── index.js
│   ├── index.css
│   ├── icons.js                # Resolver de iconos (tree-shaking del bundle)
│   ├── setupTests.js
│   └── __tests__/              # Tests de datos y render
├── package.json
└── README.md
```

---

## 🚀 Instrucciones para crear el proyecto

### 1. Requisitos previos

Asegúrate de tener instalado:
- **Node.js** (v18 o superior) → https://nodejs.org
- **npm** (viene incluido con Node)

Verifica con:
```bash
node -v
npm -v
```

---

### 2. Crear el proyecto

Tienes dos opciones:

#### Opción A — Usar los archivos de este ZIP directamente
1. Descomprime el ZIP en la carpeta que prefieras
2. Abre una terminal en esa carpeta
3. Ejecuta:
```bash
npm install
```

#### Opción B — Crear desde cero con Create React App
```bash
npx create-react-app portfolio
cd portfolio
npm install framer-motion
```
Luego reemplaza los archivos en `src/` con los de este proyecto.

---

### 3. Iniciar el servidor de desarrollo

```bash
npm start
```

Esto abrirá automáticamente `http://localhost:3000` en tu navegador. 🎉

---

### 4. Personalizar tu información

Todo tu contenido está en **`src/data/data.js`**. Edita:

```js
// Tu perfil
export const profileData = {
  username: "tu.nombre",        // @username
  fullName: "Tu Nombre",        // nombre que aparece en negrita
  title: "Desarrollador...",    // subtítulo
  bio: ["línea 1", "línea 2"],  // texto de bio
  tags: ["#React", "#Node"],    // hashtags
  link: "tunombre.dev",         // enlace del perfil
  email: "tu@email.com",        // destinatario del formulario de contacto (mailto)
  socials: [  // redes sociales (deja href: "" para ocultar)
    { icon: "FaGithub", label: "GitHub", href: "https://github.com/tunombre", color: "#24292e" },
  ],
  avatar: "🧑‍💻",               // emoji de avatar (o cambia por img)
  stats: { projects: 12, experience: 4, satisfaction: "98%" },
};

// Tus habilidades (aparecen como "Highlights")
export const skills = [
  { icon: "⚛️", label: "React" },
  // ...agrega o quita las que quieras
];

// Tus proyectos (feed de 3 columnas)
export const projects = [
  {
    emoji: "🛒",
    gradient: "linear-gradient(135deg,#667eea,#764ba2)", // color de fondo
    title: "Nombre del proyecto",
    stack: "React · Node · MongoDB",
    likes: 248,
    comments: 14,
    desc: "Descripción larga que aparece en el modal al hacer clic...",
    tags: ["React", "Node.js", "MongoDB"],
  },
  // ...agrega todos los proyectos que quieras
];
```

---

### 5. Agregar tu foto de perfil (opcional)

En `src/components/ProfileHeader.jsx`, reemplaza el emoji por una imagen real:

```jsx
// Cambia esto:
<div className={styles.avatarImg}>{avatar}</div>

// Por esto:
<img
  src="/foto.jpg"           // pon tu foto en la carpeta public/
  alt="Mi foto"
  className={styles.avatarImg}
  style={{ objectFit: "cover" }}
/>
```

---

### 6. Build para producción

Cuando estés listo para publicar:

```bash
npm run build
```

Genera la carpeta `build/` lista para subir a cualquier hosting:
- **Netlify** → arrastra la carpeta `build/` a netlify.com
- **Vercel** → `npx vercel` en la terminal
- **GitHub Pages** → instala `gh-pages` y sigue su guía

---

## ✨ Animaciones incluidas

| Componente | Animación |
|---|---|
| Navbar | Slide-down al cargar |
| Avatar | Pulse + rotate al hover |
| Estadísticas | Stagger fade-in |
| Skills | Scale-in con bounce al aparecer en pantalla |
| Feed Grid | Reveal por columna al hacer scroll |
| Feed Hover | Overlay + emoji scale |
| Modal | Spring scale al abrir, slide-out al cerrar |
| Formulario | Campos entran desde la izquierda escalonados |
| Botón enviar | Cambia a verde con animación al enviar |

---

## 🛠 Tecnologías

- **React 18** — UI components
- **Framer Motion** — Animaciones declarativas
- **CSS Modules** — Estilos encapsulados por componente
- **Google Fonts** — DM Sans + DM Serif Display
- **Modo oscuro** — toggle en la navbar, recuerda tu preferencia (localStorage/system)
- **Jest** — `npm test` valida datos y render

---

¡Listo! 🚀 Cualquier duda, edita `src/data/data.js` y el proyecto se actualiza en tiempo real.
