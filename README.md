<p align="center">
  <img src="./public/assets/logo-vrume.png" alt="Logo Vrume" width="280"/>
</p>

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
