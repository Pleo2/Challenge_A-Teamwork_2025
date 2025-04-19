<p align="center">
  <img src="./public/assets/logo-vrume.png" alt="Logo Vrume" width="280"/>
</p>


# Vrume – High-Impact Digital Advertising

> Technical test project for a job interview.
> Demonstrates best practices, modern architecture, and professional use of Astro.

## Description

Vrume is a landing page aimed at attracting clients for digital advertising services. The project's goal is to showcase the ability to build fast, accessible, scalable, and SEO-optimized web solutions using Astro and frontend best practices.

## Key Features

- **Superior performance:** Astro removes unnecessary JavaScript, achieving ultra-fast load times.
- **Advanced SEO:** Dynamic meta tags, semantic structure, and integrated sitemap.
- **Accessibility:** Proper tags, readable fonts, and adequate contrast.
- **Componentization:** Architecture based on reusable components and clear layouts.
- **Modern styles:** Use of CSS custom properties, local fonts, and modular organization to reflect my skill with native CSS.
- **Production-ready:** Scripts for build, preview, and easy deployment.
- **Scalability:** Structure ready to grow or integrate new features.

## Why Astro?

Astro is ideal for this type of project because:

- It serves only the necessary code, optimizing performance.
- It facilitates the integration of modern frameworks if required.
- It offers SSR/SSG, ideal for landing pages and high-traffic sites.
- It promotes best practices by default (accessibility, SEO, modularity).
- It keeps the code clean and easy to maintain.

## Applied Best Practices

- Clear and scalable folder structure.
- Use of CSS variables and local fonts.
- Separation of concerns: layouts, components, styles, and pages.
- Updated version and dependency control.
- Configuration files for robots and manifest.
- Well-commented and readable code.

## SEO Optimization

One of the main strengths of this project is advanced SEO optimization, implemented directly in [`src/layouts/MainLayout.astro`](./src/layouts/MainLayout.astro). Meta tags, title, description, share image (Open Graph/Twitter), and canonical tag are managed dynamically, ensuring each page is perfectly prepared for search engines and social networks.

**Highlighted code snippet:**

```astro
// src/layouts/MainLayout.astro
const {
    title,
    description,
    lang = "es",
    image,
    canonicalURL = Astro.url,
    noindex = false
} = Astro.props;

const robotsContent = noindex ? "noindex, follow" : "index, follow";
const defaultOgImage = new URL(
    "/assets/VRUME-white-with-red-dot.png",
    Astro.url.origin
).toString();
let ogImageUrl = image ? new URL(image, Astro.url.origin).toString() : defaultOgImage;
const finalCanonicalURL = typeof canonicalURL === "string" ? canonicalURL : canonicalURL.toString();
---
<html lang={lang}>
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={finalCanonicalURL} />
    <meta name="robots" content={robotsContent} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImageUrl} />
    <!-- ... -->
  </head>
  <!-- ... -->
</html>
```

Thanks to this approach, every page of the site is optimized for search engines and social networks, improving the project's visibility and reach.

## Image and Visual Resource Optimization

The project stands out for thorough optimization of images and visual resources, reducing the total image weight from **10.8 MB to approximately 1 MB**. This drastically improves load times and user experience.

- **Optimized images:** All images were compressed and converted to modern formats (WebP) without sacrificing visual quality.
- **Lazy loading:** Deferred loading (`loading="lazy"`) was implemented for all non-critical images, improving performance and LCP.
- **Native backgrounds and gradients:** CSS native animations and gradients were used instead of external images, as seen in [`RoundedShape.astro`](./src/components/sections/hero/RoundedShape.astro) and [`Hero.astro`](./src/components/sections/hero/Hero.astro).

**Example of lazy loading and use of the Astro Image component:**

```astro
<Image
  src="/assets/ejemplo.webp"
  alt="Image description"
  width={400}
  height={300}
  loading="lazy"
/>
```

**Example of animated background and native CSS gradient:**

```css
.hero-container::before {
  content: " ";
  position: absolute;
  bottom: -5dvh;
  right: 0;
  width: 30vw;
  height: 30vw;
  background: radial-gradient(circle, var(--color-dark-accent) 60%, transparent 100%);
  border-radius: 9999px;
  filter: blur(5rem);
}
```

**Snippet from `RoundedShape.astro`:**

```astro
<Image
  src="/assets/Rounded shape.webp"
  alt="Hero rounded geometric shape 1"
  class="rounded-shape-1"
  width={100}
  height={100}
  loading="eager"
/>
```

Thanks to these techniques, the website offers an attractive, fast, and modern visual experience, maximizing performance without relying on external resources.

## Usage Example

```bash
# Clone the repository
git clone https://github.com/your-username/vrume.git
cd vrume

# Install dependencies
pnpm install --force

# Start the development server
pnpm run dev

# Build the production version
pnpm run build

# Preview the generated site
pnpm run preview
```

## Dependencies Used

- **astro**: Main framework for modern web development, SSR/SSG, resource optimization, and SEO.
- **embla-carousel**: Library for accessible and responsive carousels and sliders.
- **embla-carousel-auto-scroll**: Extension for auto-scroll in carousels, enhancing the visual experience.
- **embla-carousel-autoplay**: Extension for autoplay in carousels, ideal for banners or testimonials.

> Other internal dependencies: `esbuild` and `sharp` (used in build and image optimization).

## Licenses

### Project and main dependencies

- This project is licensed under the **MIT** license.
- Astro and all used libraries are under compatible open source licenses.

### Fonts

- **Roboto**: Licensed under the [SIL Open Font License 1.1](./public/fonts/OFL-Roboto.txt)
  Copyright 2011 The Roboto Project Authors
- **Bebas Neue**: Licensed under the [SIL Open Font License 1.1](./public/fonts/OFL-BebasNeue.txt)
  Copyright 2010 by Dharma Type

You can check the full license files in the `/public/fonts/` folder.

---

# Vrume – Publicidad Digital de Alto Impacto

> Proyecto de prueba técnica para entrevista laboral.
> Demuestra buenas prácticas, arquitectura moderna y uso profesional de Astro.

## Descripción

Vrume es una landing page orientada a la captación de clientes para servicios de publicidad digital. El objetivo del proyecto es mostrar la capacidad de construir soluciones web rápidas, accesibles, escalables y optimizadas para SEO utilizando Astro y buenas prácticas de desarrollo frontend.

## Características Destacadas

- **Desempeño superior:** Astro elimina JavaScript innecesario, logrando cargas ultrarrápidas.
- **SEO avanzado:** Metaetiquetas dinámicas, estructura semántica y sitemap integrado.
- **Accesibilidad:** Uso de etiquetas correctas, fuentes legibles y contraste adecuado.
- **Componentización:** Arquitectura basada en componentes reutilizables y layouts claros.
- **Estilos modernos:** Uso de CSS custom properties, fuentes locales y organización modular, para reflejar mi habilidad con css nativo.
- **Preparado para producción:** Scripts para build, preview y despliegue sencillo.
- **Escalabilidad:** Estructura lista para crecer o integrar nuevas funcionalidades.

## ¿Por qué Astro?

Astro es ideal para este tipo de proyectos porque:

- Permite servir solo el código necesario, optimizando el performance.
- Facilita la integración de frameworks modernos si el proyecto lo requiere.
- Ofrece SSR/SSG, ideal para landing pages y sitios de alto tráfico.
- Promueve buenas prácticas por defecto (accesibilidad, SEO, modularidad).
- Mantiene el código limpio y fácil de mantener.

## Buenas Prácticas Aplicadas

- Estructura de carpetas clara y escalable.
- Uso de variables CSS y fuentes locales.
- Separación de responsabilidades: layouts, componentes, estilos y páginas.
- Control de versiones y dependencias actualizado.
- Archivos de configuración para robots y manifest.
- Código comentado y legible.

## SEO Optimizado

Una de las fortalezas principales de este proyecto es la optimización avanzada para SEO, implementada directamente en [`src/layouts/MainLayout.astro`](./src/layouts/MainLayout.astro). Se gestionan dinámicamente las metaetiquetas, el título, la descripción, la imagen para compartir (Open Graph/Twitter) y la etiqueta canonical, asegurando que cada página esté perfectamente preparada para motores de búsqueda y redes sociales.

**Fragmento de código destacado:**

```astro
---
// src/layouts/MainLayout.astro
const {
    title,
    description,
    lang = "es",
    image,
    canonicalURL = Astro.url,
    noindex = false
} = Astro.props;

const robotsContent = noindex ? "noindex, follow" : "index, follow";
const defaultOgImage = new URL(
    "/assets/VRUME-white-with-red-dot.png",
    Astro.url.origin
).toString();
let ogImageUrl = image ? new URL(image, Astro.url.origin).toString() : defaultOgImage;
const finalCanonicalURL = typeof canonicalURL === "string" ? canonicalURL : canonicalURL.toString();
---
<html lang={lang}>
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={finalCanonicalURL} />
    <meta name="robots" content={robotsContent} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImageUrl} />
    <!-- ... -->
  </head>
  <!-- ... -->
</html>
```

Gracias a este enfoque, cada página del sitio está optimizada para buscadores y redes sociales, mejorando la visibilidad y el alcance del proyecto.

## Optimización de Imágenes y Recursos Visuales

El proyecto destaca por una optimización exhaustiva de imágenes y recursos visuales, logrando reducir el peso total de imágenes de **10.8 MB a aproximadamente 1 MB**. Esto mejora drásticamente el tiempo de carga y la experiencia del usuario.

- **Imágenes optimizadas:** Todas las imágenes fueron comprimidas y convertidas a formatos modernos (WebP) sin sacrificar calidad visual.
- **Lazy loading:** Se implementó carga diferida (`loading="lazy"`) en todas las imágenes no críticas, mejorando el rendimiento y el LCP.
- **Fondos y degradados nativos:** Se emplearon animaciones y degradados CSS nativos en vez de imágenes externas, como se aprecia en [`RoundedShape.astro`](./src/components/sections/hero/RoundedShape.astro) y [`Hero.astro`](./src/components/sections/hero/Hero.astro).

**Ejemplo de lazy loading y uso del componente Image de Astro:**

```astro
<Image
  src="/assets/ejemplo.webp"
  alt="Descripción de la imagen"
  width={400}
  height={300}
  loading="lazy"
/>
```

**Ejemplo de fondo animado y degradado nativo en CSS:**

```css
.hero-container::before {
  content: " ";
  position: absolute;
  bottom: -5dvh;
  right: 0;
  width: 30vw;
  height: 30vw;
  background: radial-gradient(circle, var(--color-dark-accent) 60%, transparent 100%);
  border-radius: 9999px;
  filter: blur(5rem);
}
```

**Fragmento de uso en `RoundedShape.astro`:**

```astro
<Image
  src="/assets/Rounded shape.webp"
  alt="Hero rounded geometric shape 1"
  class="rounded-shape-1"
  width={100}
  height={100}
  loading="eager"
/>
```

Gracias a estas técnicas, la web ofrece una experiencia visual atractiva, rápida y moderna, maximizando el rendimiento sin depender de recursos externos.

## Ejemplo de Uso

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/vrume.git
cd vrume

# Instala dependencias
pnpm install --force

# Inicia el servidor de desarrollo
pnpm run dev

# Genera la versión de producción
pnpm run build

# Previsualiza el sitio generado
pnpm run preview

```

## Dependencias Utilizadas

- **astro**: Framework principal para desarrollo web moderno, SSR/SSG, optimización de recursos y SEO.
- **embla-carousel**: Librería para carruseles y sliders accesibles y responsivos.
- **embla-carousel-auto-scroll**: Extensión para auto-scroll en carruseles, mejora la experiencia visual.
- **embla-carousel-autoplay**: Extensión para autoplay en carruseles, ideal para banners o testimonios.

> Otras dependencias internas: `esbuild` y `sharp` (utilizadas en build y optimización de imágenes).

## Licencias

### Proyecto y dependencias principales

- Este proyecto está bajo licencia **MIT**.
- Astro y todas las librerías utilizadas están bajo licencias open source compatibles.

### Fuentes tipográficas

- **Roboto**: Licenciada bajo la [SIL Open Font License 1.1](./public/fonts/OFL-Roboto.txt)
  Copyright 2011 The Roboto Project Authors
- **Bebas Neue**: Licenciada bajo la [SIL Open Font License 1.1](./public/fonts/OFL-BebasNeue.txt)
  Copyright 2010 by Dharma Type

Puedes consultar los archivos de licencia completos en la carpeta `/public/fonts/`.

