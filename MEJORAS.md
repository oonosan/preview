# Mejoras pendientes — Newcomer

Lista para ir resolviendo de a partes. Marcá con `[x]` lo que vayas cerrando.

## Ya resuelto
- [x] Migración a Astro (sitio estático; Netlify detecta el form sin trucos)
- [x] Formulario de Netlify con envío por `fetch` (`src/components/ContactForm.astro`)
- [x] Validaciones del formulario (requeridos, email válido, largos mínimos/máximos, mensajes de error)
- [x] Mensaje de éxito / error al enviar
- [x] Link "Developed by Ono" (le faltaba `https://`)
- [x] Imagen temporal de Google descargada a `public/images/document-stamp.png`
- [x] Año del footer automático (se calcula al hacer build: hay que redeployar una vez al año)
- [x] Título, meta description, Open Graph básico y favicon (`src/layouts/Layout.astro`)
- [x] Material Symbols cargado una sola vez
- [x] Los links de anclas ya no quedan tapados por el header fijo (`scroll-padding-top`)
- [x] README actualizado
- [x] Node actualizado y Astro en la última versión
- [x] Dev toolbar de Astro desactivada

## Técnico

- [ ] **Verificar el form en Netlify después del deploy**: en el panel → Forms debería aparecer `contact-newcomer`. Configurar ahí las notificaciones por email al familiar.
- [ ] **reCAPTCHA**: el reCAPTCHA automático de Netlify no funciona con formularios renderizados por JS, así que se reemplazó por un honeypot (`bot-field`). Si llega spam, usar reCAPTCHA propio: crear keys en Google y cargar `SITE_RECAPTCHA_KEY` / `SITE_RECAPTCHA_SECRET` en Netlify, y renderizar el widget a mano.
- [ ] **Reemplazar la imagen del sello**: es una imagen generada por IA con texto deformado ("SAFE WORK" + letras ilegibles). Usar una foto real o de stock (Unsplash/Pexels) y optimizarla a WebP.
- [ ] SEO: falta `og:image` (una imagen 1200×630 para que el link se vea bien en WhatsApp/redes) y un favicon `.ico`/SVG optimizado.
- [ ] Partir `src/pages/index.astro` en componentes (Header, Hero, Services, Process, Footer) para que sea más fácil de mantener.
- [ ] Botón "Learn About International Service" no hace nada — conectarlo a una sección o al contacto.
- [ ] Dark mode a medias: header/footer tienen clases `dark:` pero no hay tokens oscuros y las clases `dark:` se activan con el modo oscuro del sistema (solo header/footer cambian). Decidir: completarlo o sacar las clases `dark:`.
- [ ] Colores hardcodeados (`#006670`, `#f0f4f5`, `#575d5d`, `font-['Inter']`…) en header/footer — reemplazar por los tokens del tema (`bg-primary`, `text-tertiary`, etc.).
- [ ] Los radios del tema en `src/styles/global.css` (`--radius-xl`, etc.) pisan los defaults de Tailwind con valores más chicos — revisar si es intencional.
- [ ] Íconos por ligadura muestran el texto ("arrow_forward") un instante antes de cargar la fuente. Opciones: `display=block` en el link de la fuente, o usar SVGs inline.
- [ ] Footer con HTML sin indentar — pasar Prettier.

## Contenido (confirmar con el familiar)

- [ ] **Claims riesgosos**: "Certified Agency", "our legal team", "Express Processing". Si no hay abogados o certificación real, cambiar el texto.
- [ ] Email `contact@newcomer.ar`: confirmar que existe y que alguien lo lee.
- [ ] Sección "Quiénes somos": foto, nombre, trayectoria, años de experiencia.
- [ ] Testimonios / reseñas (idealmente de Google Business).
- [ ] FAQ: "¿cuánto tarda una residencia?", "¿tengo que estar en Argentina?", "¿qué documentos necesito?", "¿cuánto cuesta?".
- [ ] Precios orientativos ("desde $X", "consulta inicial gratuita") para bajar fricción.
- [ ] Números de confianza: casos resueltos, países atendidos, años.

## UX / Diseño

- [ ] **Botón flotante de WhatsApp** — probablemente el canal que más convierte para este público.
- [ ] **Idiomas**: sumar español (y evaluar portugués para ciudadanos Mercosur/Brasil).
- [ ] Header: agregar nombre de marca junto al logo y navegación (Services / Process / Contact).
- [ ] Hero: es solo tipografía; sumar una imagen con identidad (Buenos Aires, persona real) para que no se vea genérico.
- [ ] "Requesting from Abroad?" es el diferencial más fuerte y está enterrado en la grilla — darle sección propia.
- [ ] Mobile: revisar tamaños del hero (`text-5xl`) y los números grandes del "Our Method" en pantallas chicas.
- [ ] Accesibilidad: revisar contraste del texto `text-secondary` y de los badges con `opacity-60`.
