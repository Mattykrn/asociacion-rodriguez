# Asociación Civil Monseñor Antonio Rodríguez

Sitio web institucional estático. Orientado a WhatsApp como único canal de contacto e inscripción a talleres.

## Requisitos

- Node.js >= 20
- npm

## Instalar y correr en local

```bash
npm install
npm run dev
```

Abrir en el navegador: [http://localhost:5173](http://localhost:5173)

## Build para producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`, lista para subir a cualquier hosting estático.

## Editar talleres

Los talleres se definen en `src/data/courses.json`. Editar ese archivo para agregar, modificar o desactivar talleres.

```json
{
  "id": 1,
  "title": "Taller de Herrería y Soldadura",
  "description": "Descripción del taller...",
  "schedule": "Martes y jueves de 15:00 a 17:00",
  "duration": "12 semanas",
  "capacity": 15,
  "instructor": "Nombre del instructor",
  "active": true
}
```

- `active: false` oculta el taller sin borrarlo.
- El orden en el JSON es el orden en que se muestran en la página.

## Cambiar el número de WhatsApp

El número de WhatsApp está hardcodeado en los siguientes archivos.

Buscar `543425428160` y reemplazar por el nuevo número con código de país (sin el `+`):

- `src/components/Hero.jsx`
- `src/components/Layout.jsx`
- `src/components/Footer.jsx`
- `src/components/ContactInfo.jsx`
- `src/components/RegistrationForm.jsx`
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Courses.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Gallery.jsx`

## Deploy en Vercel

1. Conectar el repositorio a [vercel.com](https://vercel.com)
2. Framework: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. No requiere variables de entorno.

## Estructura del proyecto

```
src/
├── App.jsx                    # Rutas
├── components/                # Componentes reutilizables
│   ├── ContactInfo.jsx        # Datos de contacto + mapa
│   ├── CourseCard.jsx         # Tarjeta de taller
│   ├── Footer.jsx             # Footer institucional
│   ├── Gallery.jsx            # Galería de imágenes
│   ├── Hero.jsx               # Hero de la página principal
│   ├── Layout.jsx             # Layout global (Navbar + Footer + WhatsApp FAB)
│   ├── Navbar.jsx             # Barra de navegación
│   └── RegistrationForm.jsx   # Formulario de inscripción vía WhatsApp
├── data/
│   └── courses.json           # Datos de los talleres
├── pages/
│   ├── Home.jsx               # Página principal
│   ├── About.jsx              # Nosotros
│   ├── Contact.jsx            # Contacto
│   ├── Courses.jsx            # Talleres
│   ├── Gallery.jsx            # Galería
│   └── NotFound.jsx           # 404
├── styles/
│   ├── main.css               # Estilos principales
│   └── responsive.css         # Media queries
└── main.jsx                   # Entry point
```

## Personalización visual

- Colores editados en `src/styles/main.css` en la sección `:root`.
- Paleta principal: azul `#1E3A8A`, dorado `#C49B4A`, blanco `#FFF`, gris `#F3F4F6`.
- Tipografía: Inter (Google Fonts).
