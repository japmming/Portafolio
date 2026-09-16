# 🧑‍💻 Portfolio Instagram

Portafolio personal con estética de Instagram, construido con **React 18**, **Framer Motion** y **CSS Modules**. Totalmente responsive: replica el layout del perfil de Instagram en desktop y móvil, con feed de proyectos, timeline de experiencia, blog y formulario de contacto.

---

## ✨ Características

- **Perfil estilo Instagram** con avatar, stats y bio alineadas en todos los dispositivos
- **Feed de proyectos** en grid de 3 columnas con modal de detalle (carga perezosa)
- **Timeline de experiencia** animada
- **Blog** en la tercera pestaña del feed, con lista y vista de lectura
- **Formulario de contacto** que envía a **Formspree** (con estados enviando/enviado/error, anti-spam honeypot y *fallback* a `mailto:` si no hay ID configurado)
- **Modo oscuro** con toggle en la navbar (persistencia + preferencia del sistema)
- **Animaciones fluidas** con Framer Motion en toda la interfaz
- **Responsive** en 6 breakpoints (`900px / 768px / 735px / 640px / 480px / 400px`)
- **SEO**: meta description, Open Graph, JSON-LD y favicon propio
- **Tests** con Jest (datos + render)

## 🛠 Stack

| | |
|---|---|
| Framework | React 18 (Create React App 5) |
| Animaciones | Framer Motion |
| Iconos | lucide-react · react-icons (imports explícitos con tree-shaking) |
| Estilos | CSS Modules + variables de tema |
| Contacto | Formspree (fetch POST) con fallback a mailto |
| Tipografía | DM Sans + DM Serif Display (Google Fonts) |
| Tests | Jest (react-scripts) |

## 🚀 Primeros pasos

```bash
npm install    # instala dependencias
npm start      # servidor de desarrollo → http://localhost:3000
npm test       # tests (Jest)
npm run build  # build de producción en /build
```

### Formulario de contacto (Formspree)

1. Crea una cuenta gratuita en [formspree.io](https://formspree.io) y crea un form.
2. Copia tu ID (la parte de `f/` en la URL) y configúralo en un archivo `.env` (copia `.env.example`):

   ```bash
   REACT_APP_FORMSPREE_ID=mi_id_de_formspree
   ```

3. Reinicia `npm start` y listo.

> Cuando tus clientes envíen el formulario, los mensajes llegan al **email que registraste en Formspree**.
> Si **no** defines `REACT_APP_FORMSPREE_ID`, el formulario vuelve al modo `mailto:` (abre tu cliente de correo con el mensaje prellenado).

### Requisitos

- Node.js v18 o superior
- npm (incluido con Node)

## 🗂 Estructura del proyecto

```
portfolio/
├── public/
│   ├── index.html             # SEO + theme anti-flash
│   ├── favicon.svg
│   └── programmer-3d.webp     # avatar
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # sticky, toggle modo oscuro, sección activa
│   │   ├── ProfileHeader.jsx  # header estilo Instagram (grid responsive)
│   │   ├── Avatar.jsx         # avatar con fallback si la imagen no carga
│   │   ├── Skills.jsx         # highlights/stories de habilidades
│   │   ├── FeedGrid.jsx       # tabs: Proyectos · Experiencia · Blog
│   │   ├── Modal.jsx          # detalle de proyecto (dialog accesible)
│   │   ├── Experience.jsx     # timeline de experiencia
│   │   ├── Blog.jsx           # listado + lectura de artículos
│   │   └── Contact.jsx        # formulario mailto + redes sociales
│   ├── data/
│   │   └── data.js            # ⭐ TODO tu contenido editable
│   ├── icons.js               # resolver de iconos (bundle optimizado)
│   ├── index.css              # variables de tema claro/oscuro
│   ├── setupTests.js
│   └── __tests__/             # tests de datos y render
├── package.json
├── .env.example               # copia a .env con tu REACT_APP_FORMSPREE_ID
└── README.md
```

## ✏️ Personalizar tu contenido

Todo vive en **`src/data/data.js`**:

```js
export const profileData = {
  username: "joseperezm.dev",      // @username
  fullName: "Jose Perez Marchena",
  title: "Desarrollador Full Stack & Diseñador UI/UX",
  bio: ["Transformo ideas en experiencias digitales", "..."],
  tags: ["#React", "#Node", "#.NET", "#SQL"],
  link: "joseperezm.dev",
  email: "tu@email.com",           // fallback del formulario si no hay REACT_APP_FORMSPREE_ID
  socials: [                        // deja href: "" para ocultar una red
    { icon: "FaGithub", label: "GitHub", href: "https://github.com/tunombre", color: "#24292e" },
    { icon: "FaLinkedin", label: "LinkedIn", href: "", color: "#0077b5" },
  ],
  stats: { projects: 5, experience: 2, satisfaction: "98%" },
};

// skills, projects, experience, blogPosts: edita, agrega o quita entradas
```

- **`skills`**: iconos de `react-icons` (`si`/`fa`/`vsc`) con su color de marca.
- **`projects`**: `lucideIcon` usa un nombre de icono Lucide; `githubUrl` vacío oculta el botón de GitHub.
- **`blogPosts`**: artículos con `title`, `category`, `date`, `readTime`, `excerpt`, `content[]` y `tags`.

## 🌐 Deploy en Vercel (recomendado)

El proyecto es una SPA de React (desde **Create React App 5**), así que Vercel la detecta automáticamente: **build `npm run build` · output `build/`**.

1. Creá una cuenta en [vercel.com](https://vercel.com).
2. Entrá en **Add New → Project → importa tu repo de GitHub** (`japmming/Portafolio`).
3. En **Environment Variables**, agregá tu ID de Formspree:

   | Name | Value |
   |---|---|
   | `REACT_APP_FORMSPREE_ID` | tu form ID |

4. **Deploy**. Vercel te da una URL `*.vercel.app` (y puedes conectar tu dominio propio).

**Actualización automática:** cada `git push` a `main` despliega producción solo (~1 min). Opcional: los Pull Requests generan *previews* con otra URL.

### Alternativas

- **Netlify**: arrastra `build/` a netlify.com (Netlify Drop) o importa el repo; build `npm run build`, publish dir `build/`, misma variable de entorno que arriba.
- **GitHub Pages**: instala `gh-pages` y publica `build/` (necesitas `homepage` en `package.json` para rutas relativas; el deploy es manual o con GitHub Action).

---

© 2026 Jose Perez Marchena · Hecho con ❤️ y mucho ☕