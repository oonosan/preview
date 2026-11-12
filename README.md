# Newcomer

Landing page de Newcomer (servicios de inmigración y documentación en Argentina).
Hecha con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) v4.

Preview: https://preview.onokaren.com

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera el sitio estático en dist/
npm run preview    # sirve dist/ localmente
```

## Estructura

```
src/
  layouts/Layout.astro         <head>, fuentes, meta tags
  pages/index.astro            la página
  components/ContactForm.astro formulario de contacto (Netlify Forms)
  styles/global.css            tema de Tailwind (colores, fuentes)
public/                        logos e imágenes servidas tal cual
```

## Deploy

Netlify, configurado en `netlify.toml` (build `npm run build`, publica `dist/`).

El formulario usa Netlify Forms: Netlify lo detecta en el HTML al deployar
(nombre `contact-newcomer`). Los envíos se ven en el panel de Netlify → Forms.
Antispam: honeypot (`bot-field`).

Mejoras pendientes en [MEJORAS.md](MEJORAS.md).
